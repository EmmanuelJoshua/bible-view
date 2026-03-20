import React, { useRef, useEffect, useCallback, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTimeline } from '../../context/TimelineContext'
import { Play, Pause, SkipBack, SkipForward, Clock } from 'lucide-react'

const SPEED_PRESETS = [
  { label: '0.5x', step: 3, interval: 120 },
  { label: '1x', step: 5, interval: 100 },
  { label: '2x', step: 10, interval: 80 },
  { label: '4x', step: 20, interval: 60 },
]

export function ChronosSlider() {
  const { 
    currentYear, setCurrentYear, timelineData, formatYear, 
    isPlaying, setIsPlaying, eraColor, ERA_LABELS, ERA_COLORS
  } = useTimeline()
  
  const intervalRef = useRef(null)
  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const [speedIdx, setSpeedIdx] = useState(1)
  const [hoveredEvent, setHoveredEvent] = useState(null)
  const [hoveredEra, setHoveredEra] = useState(null)
  const [tooltipX, setTooltipX] = useState(0)

  const minYear = timelineData[0].year
  const maxYear = timelineData[timelineData.length - 1].year
  const totalSpan = maxYear - minYear

  // --- Era segments ---
  const eraSegments = useMemo(() => {
    const segments = []
    let era = timelineData[0].era
    let start = timelineData[0].year

    for (let i = 1; i < timelineData.length; i++) {
      if (timelineData[i].era !== era) {
        segments.push({ era, startYear: start, endYear: timelineData[i].year })
        era = timelineData[i].era
        start = timelineData[i].year
      }
    }
    segments.push({ era, startYear: start, endYear: maxYear })

    return segments.map(seg => ({
      ...seg,
      label: ERA_LABELS[seg.era] || seg.era,
      color: ERA_COLORS[seg.era] || '#00f3ff',
      leftPct: ((seg.startYear - minYear) / totalSpan) * 100,
      widthPct: ((seg.endYear - seg.startYear) / totalSpan) * 100,
    }))
  }, [timelineData, minYear, maxYear, totalSpan, ERA_LABELS, ERA_COLORS])

  // --- Pointer → year conversion ---
  const pointerToYear = useCallback((clientX) => {
    if (!trackRef.current) return currentYear
    const rect = trackRef.current.getBoundingClientRect()
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    return Math.round(minYear + pct * totalSpan)
  }, [minYear, totalSpan, currentYear])

  // --- Drag handling ---
  const handlePointerDown = useCallback((e) => {
    isDragging.current = true
    setCurrentYear(pointerToYear(e.clientX))
    e.currentTarget.setPointerCapture(e.pointerId)
  }, [pointerToYear, setCurrentYear])

  const handlePointerMove = useCallback((e) => {
    if (isDragging.current) {
      setCurrentYear(pointerToYear(e.clientX))
    }
  }, [pointerToYear, setCurrentYear])

  const handlePointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  // --- Playback ---
  const startPlayback = useCallback(() => setIsPlaying(true), [setIsPlaying])
  const stopPlayback = useCallback(() => setIsPlaying(false), [setIsPlaying])

  const skipPrev = useCallback(() => {
    const prev = timelineData.filter(e => e.year < currentYear)
    if (prev.length) setCurrentYear(prev[prev.length - 1].year)
  }, [currentYear, timelineData, setCurrentYear])

  const skipNext = useCallback(() => {
    const next = timelineData.find(e => e.year > currentYear)
    if (next) setCurrentYear(next.year)
  }, [currentYear, timelineData, setCurrentYear])

  const decreaseSpeed = useCallback(() => setSpeedIdx(p => Math.max(0, p - 1)), [])
  const increaseSpeed = useCallback(() => setSpeedIdx(p => Math.min(SPEED_PRESETS.length - 1, p + 1)), [])

  useEffect(() => {
    if (isPlaying) {
      const { step, interval } = SPEED_PRESETS[speedIdx]
      intervalRef.current = setInterval(() => {
        setCurrentYear(prev => {
          const next = prev + step
          if (next >= maxYear) { setIsPlaying(false); return maxYear }
          return next
        })
      }, interval)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPlaying, maxYear, setCurrentYear, setIsPlaying, speedIdx])

  const progressPct = ((currentYear - minYear) / totalSpan) * 100

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 z-50"
      style={{ width: '680px', maxWidth: '90vw' }}
    >
      <div className="bg-tactical-bg/90 border border-tactical-cyan/30 backdrop-blur-md corner-decoration">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-tactical-cyan/15 bg-tactical-cyan/5">
          <div className="flex items-center gap-2">
            <Clock size={11} className="text-tactical-cyan" />
            <span className="text-[9px] text-tactical-cyan uppercase tracking-[0.2em]">Chronos Engine</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[9px] text-gray-500 font-mono">{progressPct.toFixed(1)}%</span>
          </div>
        </div>
        
        <div className="p-3 pt-2">
          {/* Year labels */}
          <div className="flex justify-between text-xs font-mono mb-2 px-0.5">
            <span className="text-gray-600 text-[10px]">{formatYear(minYear)}</span>
            <span className="text-sm font-bold tracking-[0.2em]" style={{ color: eraColor }}>
              {formatYear(currentYear)}
            </span>
            <span className="text-gray-600 text-[10px]">{formatYear(maxYear)}</span>
          </div>
          
          {/* ===== UNIFIED TRACK ===== */}
          <div className="relative mb-3 select-none" style={{ height: '32px' }}>
            {/* Tooltip for hovered event */}
            <AnimatePresence>
              {hoveredEvent && (
                <motion.div
                  key={hoveredEvent.event}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.12 }}
                  className="absolute bottom-full mb-2 pointer-events-none z-30"
                  style={{ left: `${tooltipX}px`, transform: 'translateX(-50%)' }}
                >
                  <div className="bg-tactical-bg border border-tactical-cyan/40 px-2.5 py-1.5 rounded-sm backdrop-blur-md whitespace-nowrap">
                    <span className="text-[10px] font-bold text-white block">{hoveredEvent.event}</span>
                    <span className="text-[9px] text-gray-400 font-mono">{formatYear(hoveredEvent.year)}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tooltip for hovered era */}
            <AnimatePresence>
              {hoveredEra && !hoveredEvent && (
                <motion.div
                  key={hoveredEra.era}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.12 }}
                  className="absolute bottom-full mb-2 pointer-events-none z-30"
                  style={{ left: `${tooltipX}px`, transform: 'translateX(-50%)' }}
                >
                  <div className="bg-tactical-bg border border-tactical-cyan/40 px-2.5 py-1.5 rounded-sm backdrop-blur-md whitespace-nowrap">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: hoveredEra.color, boxShadow: `0 0 6px ${hoveredEra.color}` }} />
                      <span className="text-[10px] font-bold text-white">{hoveredEra.label}</span>
                    </div>
                    <span className="text-[9px] text-gray-400 font-mono">
                      {formatYear(hoveredEra.startYear)} — {formatYear(hoveredEra.endYear)}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Interactive track area */}
            <div
              ref={trackRef}
              className="absolute inset-x-0 cursor-pointer"
              style={{ top: '8px', height: '16px' }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              {/* Era-colored segments (the track background) */}
              <div className="absolute inset-x-0 flex overflow-hidden rounded-sm" style={{ top: '4px', height: '8px' }}>
                {eraSegments.map((seg) => {
                  const isActive = currentYear >= seg.startYear
                  return (
                    <div
                      key={seg.era}
                      className="h-full transition-all duration-200"
                      style={{
                        width: `${seg.widthPct}%`,
                        backgroundColor: isActive ? seg.color : `${seg.color}22`,
                        opacity: isActive ? 0.85 : 0.3,
                      }}
                      onMouseEnter={(e) => {
                        setHoveredEra(seg)
                        const rect = trackRef.current.getBoundingClientRect()
                        setTooltipX(e.clientX - rect.left)
                      }}
                      onMouseMove={(e) => {
                        const rect = trackRef.current.getBoundingClientRect()
                        setTooltipX(e.clientX - rect.left)
                      }}
                      onMouseLeave={() => setHoveredEra(null)}
                    />
                  )
                })}
              </div>

              {/* Progress fill overlay (darkens the right side) */}
              <div
                className="absolute rounded-sm pointer-events-none"
                style={{
                  top: '4px', height: '8px',
                  left: `${progressPct}%`, right: 0,
                  backgroundColor: 'rgba(5,11,20,0.55)',
                }}
              />

              {/* Event dot markers */}
              {timelineData.map((evt, idx) => {
                const pct = ((evt.year - minYear) / totalSpan) * 100
                const isActive = currentYear >= evt.year
                const isCurrent = evt.year === currentYear
                const color = ERA_COLORS[evt.era] || '#00f3ff'
                return (
                  <div
                    key={idx}
                    className="absolute -translate-x-1/2 z-10"
                    style={{ left: `${pct}%`, top: '2px', width: '12px', height: '12px' }}
                    onMouseEnter={(e) => {
                      setHoveredEvent(evt)
                      const rect = trackRef.current.getBoundingClientRect()
                      setTooltipX(e.clientX - rect.left)
                    }}
                    onMouseLeave={() => setHoveredEvent(null)}
                  >
                    <div
                      className="rounded-full transition-all duration-200"
                      style={{
                        width: isCurrent ? '8px' : '5px',
                        height: isCurrent ? '8px' : '5px',
                        margin: 'auto',
                        marginTop: isCurrent ? '2px' : '3.5px',
                        backgroundColor: isCurrent ? '#ffffff' : isActive ? color : '#374151',
                        boxShadow: isCurrent ? `0 0 8px ${color}, 0 0 16px ${color}40` : isActive ? `0 0 4px ${color}60` : 'none',
                      }}
                    />
                  </div>
                )
              })}

              {/* Playhead */}
              <div
                className="absolute -translate-x-1/2 z-20 pointer-events-none"
                style={{ left: `${progressPct}%`, top: '0px' }}
              >
                <div className="w-[3px] rounded-full" style={{
                  height: '16px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 0 6px rgba(0,243,255,0.8), 0 0 12px rgba(0,243,255,0.4)',
                }} />
              </div>
            </div>
          </div>

          {/* Playback controls */}
          <div className="flex items-center justify-center gap-1">
            <button onClick={skipPrev} className="p-1.5 text-gray-500 hover:text-tactical-cyan transition-colors">
              <SkipBack size={12} />
            </button>
            <button 
              onClick={isPlaying ? stopPlayback : startPlayback}
              className="p-1.5 mx-2 border border-tactical-cyan/30 text-tactical-cyan hover:bg-tactical-cyan/10 transition-all"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button onClick={skipNext} className="p-1.5 text-gray-500 hover:text-tactical-cyan transition-colors">
              <SkipForward size={12} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
