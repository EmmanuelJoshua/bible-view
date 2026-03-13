import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTimeline } from '../../context/TimelineContext'
import { latLongToVector3 } from '../../utils/coordinates'
import * as THREE from 'three'

/**
 * CovenantPulses - Renders glowing markers at current event locations
 * These are the high-emissive "Holy Site" markers
 */
export function CovenantPulses() {
  const { currentEvent } = useTimeline()
  const meshRef = useRef()
  const ringRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.3
      meshRef.current.scale.set(scale, scale, scale)
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.02
      const ringScale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.15
      ringRef.current.scale.set(ringScale, ringScale, ringScale)
    }
  })

  if (!currentEvent || !currentEvent.location) return null

  const position = latLongToVector3(
    currentEvent.location.lat, 
    currentEvent.location.lng, 
    2.025
  )

  // Orient marker to face outward from globe center
  const direction = position.clone().normalize()
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 0, 1),
    direction
  )

  return (
    <group position={position} quaternion={quaternion}>
      {/* Core pulse dot */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshBasicMaterial color="#00f3ff" />
      </mesh>
      
      {/* Rotating ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[0.05, 0.065, 32]} />
        <meshBasicMaterial 
          color="#00f3ff" 
          transparent 
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial 
          color="#00f3ff" 
          transparent 
          opacity={0.15}
        />
      </mesh>
      
      {/* Light source */}
      <pointLight color="#00f3ff" intensity={1.5} distance={0.8} />
    </group>
  )
}
