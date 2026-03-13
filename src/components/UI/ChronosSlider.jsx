import React, { useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useTimeline } from '../../context/TimelineContext'
import { Play, Pause, SkipBack, SkipForward, Clock } from 'lucide-react'

export function ChronosSlider() {
  const { 
    currentYear, setCurrentYear, timelineData, formatYear, 
    isPlaying, setIsPlaying, eraColor 
  } = useTimeline()
  
  const intervalRef = useRef(null)
  const minYear = timelineData[0].year
  const maxYear = timelineData[timelineData.length - 1].year

  const handleChange = (e) => {
    setCurrentYear(parseInt(e.target.value))
  }

  // Playback controls
  const startPlayback = useCallback(() => {
    setIsPlaying(true)
  }, [setIsPlaying])

  const stopPlayback = useCallback(() => {
    setIsPlaying(false)
  }, [setIsPlaying])

  const skipPrev = useCallback(() => {
    const prevEvents = timelineData.filter(e => e.year < currentYear)
    if (prevEvents.length > 0) {
      setCurrentYear(prevEvents[prevEvents.length - 1].year)
    }
  }, [currentYear, timelineData, setCurrentYear])

  const skipNext = useCallback(() => {
    const nextEvent = timelineData.find(e => e.year > currentYear)
    if (nextEvent) {
      setCurrentYear(nextEvent.year)
    }
  }, [currentYear, timelineData, setCurrentYear])

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentYear(prev => {
          const next = prev + 10
          if (next >= maxYear) {
            setIsPlaying(false)
            return maxYear
          }
          return next
        })
      }, 50)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPlaying, maxYear, setCurrentYear, setIsPlaying])

  // Calculate progress percentage
  const progress = ((currentYear - minYear) / (maxYear - minYear)) * 100

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[640px] max-w-[90vw] bg-tactical-bg/90 border border-tactical-cyan/30 backdrop-blur-md corner-decoration"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-tactical-cyan/15 bg-tactical-cyan/5">
        <div className="flex items-center gap-2">
          <Clock size={11} className="text-tactical-cyan" />
          <span className="text-[9px] text-tactical-cyan uppercase tracking-[0.2em]">Chronos Engine</span>
        </div>
        <span className="text-[9px] text-gray-500 font-mono">
          {((progress).toFixed(1))}% COMPLETE
        </span>
      </div>
      
      <div className="p-3 pt-2">
        {/* Year display */}
        <div className="flex justify-between text-xs font-mono mb-1.5 px-0.5">
          <span className="text-gray-600 text-[10px]">{formatYear(minYear)}</span>
          <span 
            className="text-sm font-bold tracking-[0.2em]" 
            style={{ color: eraColor }}
          >
            {formatYear(currentYear)}
          </span>
          <span className="text-gray-600 text-[10px]">{formatYear(maxYear)}</span>
        </div>
        
        {/* Slider */}
        <div className="relative mb-2">
          <input 
            type="range" 
            min={minYear} 
            max={maxYear}
            step="1"
            value={currentYear}
            onChange={handleChange}
            className="w-full"
          />
          
          {/* Event markers on the timeline */}
          <div className="absolute top-[9px] left-0 right-0 pointer-events-none">
            {timelineData.map((marker, idx) => {
              const percent = ((marker.year - minYear) / (maxYear - minYear)) * 100
              const isActive = currentYear >= marker.year
              const isCurrent = marker.year === currentYear
              return (
                <div 
                  key={idx} 
                  className="absolute -translate-x-0.5"
                  style={{ left: `${percent}%` }}
                >
                  <div 
                    className={`w-[3px] h-[3px] rounded-full transition-all duration-200
                      ${isCurrent ? 'bg-white scale-150' : isActive ? 'bg-tactical-cyan' : 'bg-gray-700'}`
                    }
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Playback controls */}
        <div className="flex items-center justify-center gap-1">
          <button 
            onClick={skipPrev}
            className="p-1.5 text-gray-500 hover:text-tactical-cyan transition-colors"
          >
            <SkipBack size={12} />
          </button>
          <button 
            onClick={isPlaying ? stopPlayback : startPlayback}
            className="p-1.5 mx-2 border border-tactical-cyan/30 text-tactical-cyan hover:bg-tactical-cyan/10 transition-all"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button 
            onClick={skipNext}
            className="p-1.5 text-gray-500 hover:text-tactical-cyan transition-colors"
          >
            <SkipForward size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
