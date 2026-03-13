import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import mapImg from '../../assets/earth_map.jpg'
import specImg from '../../assets/earth_specular.jpg'

export function Earth() {
  const meshRef = useRef()
  const atmosphereRef = useRef()
  
  const [map, specularMap] = useTexture([mapImg, specImg])
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0003
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.0003
    }
  })

  return (
    <group>
      {/* Main Earth sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={map}
          specularMap={specularMap}
          specular={new THREE.Color('#1a3a5a')}
          shininess={15}
          color="#667788"
          emissive="#001a22"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Atmosphere glow shell */}
      <mesh ref={atmosphereRef} scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial
          color="#00f3ff"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Outer glow ring */}
      <mesh scale={[1.08, 1.08, 1.08]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color="#00f3ff"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}
