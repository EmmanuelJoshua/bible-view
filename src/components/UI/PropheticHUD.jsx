import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTimeline } from '../../context/TimelineContext'
import { Activity, BookOpen, MapPin, AlertTriangle } from 'lucide-react'

export function PropheticHUD() {
  const { currentEvent, currentYear, formatYear, eraColor } = useTimeline()

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="absolute left-5 top-28 w-72 bg-tactical-bg/85 border border-tactical-cyan/25 backdrop-blur-sm corner-decoration"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-tactical-cyan/20 bg-tactical-cyan/5">
        <Activity size={12} className="text-tactical-cyan tactical-pulse" />
        <span className="text-[10px] text-tactical-cyan tracking-[0.2em] uppercase">Intelligence Brief</span>
      </div>
      
      {/* Content */}
      <div className="p-3 space-y-3">
        {/* Event Name */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentEvent.event}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <BookOpen size={11} className="text-tactical-cyan" />
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">Event Designation</span>
            </div>
            <h3 className="text-sm font-bold text-white tracking-wide pl-5">
              {currentEvent.event}
            </h3>
          </motion.div>
        </AnimatePresence>
        
        {/* Intel Brief */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentEvent.info}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-tactical-cyan/5 border border-tactical-cyan/15 p-2.5 rounded-sm"
          >
            <span className="text-[9px] text-gray-500 uppercase block mb-1.5 tracking-widest">
              <AlertTriangle size={9} className="inline mr-1 -mt-0.5" />
              Briefing
            </span>
            <p className="text-[11px] text-gray-300 leading-relaxed">
              {currentEvent.info}
            </p>
          </motion.div>
        </AnimatePresence>
        
        {/* Location */}
        {currentEvent.location && (
          <div className="flex items-center gap-2 text-[10px] text-gray-500">
            <MapPin size={10} className="text-tactical-cyan" />
            <span>
              {currentEvent.location.lat.toFixed(2)}°N, {currentEvent.location.lng.toFixed(2)}°E
            </span>
          </div>
        )}
        
        {/* Timeline Position */}
        <div className="flex justify-between items-center border-t border-tactical-cyan/15 pt-2">
          <span className="text-[9px] text-gray-500 uppercase tracking-widest">Temporal Index</span>
          <span 
            className="text-xs font-bold tracking-widest"
            style={{ color: eraColor }}
          >
            {formatYear(currentYear)}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
