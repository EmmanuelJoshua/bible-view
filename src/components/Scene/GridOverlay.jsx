import React, { useRef, useMemo } from 'react'
import * as THREE from 'three'

/**
 * GridOverlay - Renders latitude/longitude grid lines on the globe
 * Creates the "digital wireframe" tactical look
 */
export function GridOverlay() {
  const gridRef = useRef()
  
  const gridLines = useMemo(() => {
    const lines = []
    const radius = 2.015 // Slightly above Earth surface
    
    // Latitude lines (every 15 degrees)
    for (let lat = -75; lat <= 75; lat += 15) {
      const points = []
      const phi = (90 - lat) * (Math.PI / 180)
      
      for (let lng = 0; lng <= 360; lng += 2) {
        const theta = lng * (Math.PI / 180)
        const x = -(radius * Math.sin(phi) * Math.cos(theta))
        const y = radius * Math.cos(phi)
        const z = radius * Math.sin(phi) * Math.sin(theta)
        points.push(new THREE.Vector3(x, y, z))
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      lines.push({ geometry, key: `lat-${lat}` })
    }
    
    // Longitude lines (every 20 degrees)
    for (let lng = 0; lng < 360; lng += 20) {
      const points = []
      const theta = lng * (Math.PI / 180)
      
      for (let lat = -90; lat <= 90; lat += 2) {
        const phi = (90 - lat) * (Math.PI / 180)
        const x = -(radius * Math.sin(phi) * Math.cos(theta))
        const y = radius * Math.cos(phi)
        const z = radius * Math.sin(phi) * Math.sin(theta)
        points.push(new THREE.Vector3(x, y, z))
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      lines.push({ geometry, key: `lng-${lng}` })
    }
    
    return lines
  }, [])

  return (
    <group ref={gridRef}>
      {gridLines.map(({ geometry, key }) => (
        <line key={key} geometry={geometry}>
          <lineBasicMaterial 
            color="#00f3ff" 
            transparent 
            opacity={0.08}
            depthWrite={false}
          />
        </line>
      ))}
    </group>
  )
}
