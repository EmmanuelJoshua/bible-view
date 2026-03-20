import React from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import mapImg from '../../assets/earth_map_16k.jpg'
import specImg from '../../assets/earth_specular.jpg'

export function Earth() {
  const [map, specularMap] = useTexture([mapImg, specImg])

  return (
    <group>
      <mesh>
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
      
      <mesh scale={[1.02, 1.02, 1.02]}>
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
