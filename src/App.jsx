import React from 'react'
import { MainScene } from './components/Scene/MainScene'
import { TacticalOverlay } from './components/UI/TacticalOverlay'

function App() {
  return (
    <div className="w-screen h-screen relative font-mono overflow-hidden">
      <MainScene />
      <TacticalOverlay />
      {/* CSS CRT scanline overlay */}
      <div className="crt-overlay" />
    </div>
  )
}

export default App
