import React from 'react'
import { PropheticHUD } from './PropheticHUD'
import { ChronosSlider } from './ChronosSlider'
import { EntityPanel } from './EntityPanel'
import { Target, Radio, Shield } from 'lucide-react'
import { useTimeline } from '../../context/TimelineContext'

export function TacticalOverlay() {
  const { currentEvent, currentYear, formatYear, eraLabel, eraColor } = useTimeline()

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Tactical border frame */}
      <div className="tactical-frame" />
      
      {/* Top bar - System Status */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 pointer-events-none">
        <div className="flex items-center gap-2 bg-tactical-bg/80 border border-tactical-cyan/20 px-4 py-1.5 backdrop-blur-sm">
          <Shield size={12} className="text-tactical-cyan" />
          <span className="text-[10px] text-tactical-cyan uppercase tracking-[0.3em] glow-text">
            Project Omniscient Lens
          </span>
          <span className="text-[9px] text-gray-500 ml-2">v2.0</span>
        </div>
      </div>

      {/* Top Right - Satellite Lock Window */}
      {currentEvent && currentEvent.location && (
        <div className="absolute top-14 right-5 border border-tactical-cyan/30 bg-tactical-bg/85 backdrop-blur-sm corner-decoration">
          <div className="bg-tactical-cyan/10 px-3 py-1 text-[10px] text-tactical-cyan uppercase flex items-center gap-2 font-mono border-b border-tactical-cyan/20">
            <Target size={11} className="tactical-pulse" />
            Sat-Lock: Active
            <span className="blink text-tactical-green ml-2">●</span>
          </div>
          <div className="p-3 font-mono text-tactical-cyan space-y-1">
            <div className="flex justify-between gap-6">
              <span className="text-[9px] text-gray-500 uppercase">Lat</span>
              <span className="text-xs font-bold tracking-widest">{currentEvent.location.lat.toFixed(4)}°</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-[9px] text-gray-500 uppercase">Lng</span>
              <span className="text-xs font-bold tracking-widest">{currentEvent.location.lng.toFixed(4)}°</span>
            </div>
            <div className="flex justify-between gap-6 border-t border-tactical-cyan/15 pt-1 mt-1">
              <span className="text-[9px] text-gray-500 uppercase">Time</span>
              <span className="text-xs font-bold tracking-widest">{formatYear(currentYear)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Top Left - Era Indicator */}
      <div className="absolute top-14 left-5">
        <div className="bg-tactical-bg/85 border border-tactical-cyan/20 backdrop-blur-sm px-3 py-2 corner-decoration">
          <span className="text-[9px] text-gray-500 uppercase block mb-0.5 tracking-widest">Current Era</span>
          <span className="text-sm font-bold tracking-widest" style={{ color: eraColor }}>
            {eraLabel}
          </span>
        </div>
      </div>
      
      {/* Classification Badge */}
      {currentEvent.classification && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 mt-10">
          <div className={`
            px-3 py-0.5 text-[9px] uppercase tracking-[0.3em] font-bold border
            ${currentEvent.classification === 'OMEGA' 
              ? 'bg-red-500/20 border-red-500/40 text-red-400' 
              : currentEvent.classification === 'ALPHA'
              ? 'bg-tactical-cyan/20 border-tactical-cyan/40 text-tactical-cyan'
              : currentEvent.classification === 'CRITICAL'
              ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
              : 'bg-gray-500/20 border-gray-500/40 text-gray-400'
            }`}
          >
            <Radio size={8} className="inline mr-1 -mt-0.5" />
            {currentEvent.classification} Classification
          </div>
        </div>
      )}

      {/* Main UI Components */}
      <PropheticHUD />
      <EntityPanel />
      <ChronosSlider />

      {/* Bottom right - System clock */}
      <div className="absolute bottom-4 right-5 text-[9px] text-gray-600 font-mono tracking-widest">
        SYS::OMNISCIENT_LENS // UNCLASSIFIED
      </div>
    </div>
  )
}
