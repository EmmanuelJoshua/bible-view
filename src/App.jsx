import React from 'react'
import { MainScene } from './components/Scene/MainScene'
import { MapOverlay } from './components/UI/MapOverlay'
import { TacticalOverlay } from './components/UI/TacticalOverlay'

function App() {
  return (
    <div className="w-screen h-screen relative font-mono overflow-hidden">
      <MainScene />
      <MapOverlay />
      <TacticalOverlay />
      <div className="crt-overlay" />
    </div>
  )
}

export default App
