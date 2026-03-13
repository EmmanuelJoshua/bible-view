import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Earth } from './Earth'
import { CovenantPulses } from './CovenantPulses'
import { EntityTrails } from './EntityTrails'
import { GridOverlay } from './GridOverlay'

export function MainScene() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 45 }}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: 'default'
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#020408')
          gl.toneMapping = 0 // NoToneMapping 
        }}
      >
        <React.Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.15} color="#334466" />
          <directionalLight position={[5, 3, 5]} intensity={0.8} color="#99aacc" />
          <pointLight position={[-5, -3, -5]} intensity={0.3} color="#003344" />
          
          {/* Starfield */}
          <Stars 
            radius={80} 
            depth={50} 
            count={3000} 
            factor={3} 
            saturation={0} 
            fade 
            speed={0.3} 
          />
          
          {/* Main globe group */}
          <group>
            <Earth />
            <GridOverlay />
            <CovenantPulses />
            <EntityTrails />
          </group>
          
          {/* Camera controls */}
          <OrbitControls 
            enablePan={false} 
            enableZoom={true} 
            minDistance={2.8} 
            maxDistance={8}
            enableDamping
            dampingFactor={0.05}
            rotateSpeed={0.5}
            autoRotate={false}
          />
        </React.Suspense>
      </Canvas>
    </div>
  )
}
