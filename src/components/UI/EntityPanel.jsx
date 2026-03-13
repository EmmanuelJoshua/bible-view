import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTimeline } from '../../context/TimelineContext'
import { Navigation, Eye, EyeOff, Route } from 'lucide-react'

/**
 * EntityPanel - Shows active entity trails and allows toggling them
 */
export function EntityPanel() {
  const { activeEntities, selectedEntity, setSelectedEntity, entityPaths, currentYear, formatYear } = useTimeline()

  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      className="absolute right-5 top-[180px] w-64 bg-tactical-bg/85 border border-tactical-cyan/25 backdrop-blur-sm corner-decoration"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-tactical-cyan/20 bg-tactical-cyan/5">
        <Route size={12} className="text-tactical-cyan" />
        <span className="text-[10px] text-tactical-cyan tracking-[0.2em] uppercase">Entity Tracker</span>
        <span className="text-[9px] text-gray-500 ml-auto">{activeEntities.length} Active</span>
      </div>
      
      {/* Entity List */}
      <div className="p-2 space-y-1 max-h-[300px] overflow-y-auto">
        {entityPaths.map(entity => {
          const isActive = activeEntities.some(e => e.id === entity.id)
          const isSelected = selectedEntity === entity.id
          const firstYear = entity.waypoints[0]?.year
          const lastYear = entity.waypoints[entity.waypoints.length - 1]?.year
          
          // Find current waypoint for this entity
          const currentWaypoint = entity.waypoints
            .filter(wp => wp.year <= currentYear)
            .pop()

          return (
            <button 
              key={entity.id}
              onClick={() => setSelectedEntity(isSelected ? null : entity.id)}
              className={`w-full text-left p-2 rounded-sm border transition-all duration-200 font-mono
                ${isActive 
                  ? 'border-tactical-cyan/20 hover:border-tactical-cyan/40 bg-tactical-cyan/5' 
                  : 'border-gray-800/40 opacity-40 cursor-default'
                }
                ${isSelected ? 'border-tactical-cyan/50 bg-tactical-cyan/10' : ''}
              `}
              disabled={!isActive}
            >
              <div className="flex items-center gap-2 mb-1">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ 
                    backgroundColor: entity.color,
                    boxShadow: isActive ? `0 0 6px ${entity.color}` : 'none'
                  }} 
                />
                <span className={`text-[11px] font-bold tracking-wide ${isActive ? 'text-white' : 'text-gray-600'}`}>
                  {entity.name}
                </span>
                <span className="ml-auto">
                  {isActive 
                    ? <Eye size={10} className="text-tactical-cyan" /> 
                    : <EyeOff size={10} className="text-gray-700" />
                  }
                </span>
              </div>
              
              {isActive && currentWaypoint && (
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentWaypoint.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="pl-4"
                  >
                    <div className="flex items-center gap-1 text-[9px] text-gray-500">
                      <Navigation size={8} style={{ color: entity.color }} />
                      <span className="truncate">{currentWaypoint.label}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              
              {!isActive && (
                <div className="pl-4 text-[9px] text-gray-600">
                  Active: {formatYear(firstYear)} – {formatYear(lastYear)}
                </div>
              )}
            </button>
          )
        })}
      </div>
    </motion.div>
  )
}
