import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useTimeline } from '../../context/TimelineContext'
import { latLongToVector3 } from '../../utils/coordinates'

const CLOSE_DISTANCE = 2.55
const WIDE_DISTANCE = 5.5
const LERP_SPEED = 0.025
const DEFAULT_POSITION = new THREE.Vector3(0, 1.5, WIDE_DISTANCE)
const ORIGIN = new THREE.Vector3(0, 0, 0)

export function CameraController({ controlsRef }) {
  const { camera } = useThree()
  const { currentEvent } = useTimeline()

  const targetCamPos = useRef(DEFAULT_POSITION.clone())
  const targetLookAt = useRef(ORIGIN.clone())
  const prevEventRef = useRef(null)

  useEffect(() => {
    if (currentEvent === prevEventRef.current) return
    prevEventRef.current = currentEvent

    if (currentEvent?.location) {
      const { lat, lng } = currentEvent.location
      const surfacePoint = latLongToVector3(lat, lng, 2)
      const direction = surfacePoint.clone().normalize()

      targetCamPos.current.copy(direction.clone().multiplyScalar(CLOSE_DISTANCE))
      const right = new THREE.Vector3().crossVectors(direction, new THREE.Vector3(0, 1, 0)).normalize()
      targetCamPos.current.addScaledVector(right, 0.15)
      targetCamPos.current.y += 0.2

      targetLookAt.current.copy(surfacePoint)
    } else {
      targetCamPos.current.copy(DEFAULT_POSITION)
      targetLookAt.current.copy(ORIGIN)
    }
  }, [currentEvent])

  useFrame(() => {
    if (!controlsRef?.current) return

    camera.position.lerp(targetCamPos.current, LERP_SPEED)
    controlsRef.current.target.lerp(targetLookAt.current, LERP_SPEED)
    controlsRef.current.update()
  })

  return null
}
