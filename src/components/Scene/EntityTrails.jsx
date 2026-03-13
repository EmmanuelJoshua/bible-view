import React, { useMemo } from 'react'
import * as THREE from 'three'
import { useTimeline } from '../../context/TimelineContext'
import { latLongToVector3 } from '../../utils/coordinates'
import { ENTITY_PATHS } from '../../data/entities'

/**
 * EntityTrails - "Breadcrumb Trails" for historical figures
 * Renders glowing path lines across the 3D globe showing
 * the journeys of Abraham, Paul, the Ark of the Covenant, etc.
 */
export function EntityTrails() {
  const { currentYear } = useTimeline()
  
  const visibleTrails = useMemo(() => {
    return ENTITY_PATHS.map(entity => {
      // Filter waypoints that are active at the current year
      const activePoints = entity.waypoints.filter(wp => wp.year <= currentYear)
      
      if (activePoints.length < 2) return null
      
      // Create 3D path from waypoints
      const points = activePoints.map(wp => 
        latLongToVector3(wp.lat, wp.lng, 2.03)
      )
      
      // Create a smooth curve through the points
      const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.5)
      const curvePoints = curve.getPoints(activePoints.length * 20)
      const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints)
      
      return {
        key: entity.id,
        geometry,
        color: entity.color,
        name: entity.name,
        // Current position is the last active waypoint
        currentPos: points[points.length - 1],
        currentLabel: activePoints[activePoints.length - 1].label
      }
    }).filter(Boolean)
  }, [currentYear])

  return (
    <group>
      {visibleTrails.map(trail => (
        <group key={trail.key}>
          {/* Trail line */}
          <line geometry={trail.geometry}>
            <lineBasicMaterial 
              color={trail.color} 
              transparent 
              opacity={0.6}
              depthWrite={false}
              linewidth={1}
            />
          </line>
          
          {/* Current position marker */}
          <mesh position={trail.currentPos}>
            <sphereGeometry args={[0.03, 12, 12]} />
            <meshBasicMaterial color={trail.color} />
          </mesh>
          
          {/* Glow around current position */}
          <mesh position={trail.currentPos}>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshBasicMaterial 
              color={trail.color} 
              transparent 
              opacity={0.3}
            />
          </mesh>
          
          <pointLight 
            position={trail.currentPos} 
            color={trail.color} 
            intensity={0.5} 
            distance={0.5} 
          />
        </group>
      ))}
    </group>
  )
}
