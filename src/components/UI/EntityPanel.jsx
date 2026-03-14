import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTimeline } from '../../context/TimelineContext'
import { Navigation, Route } from 'lucide-react'

export function EntityPanel() {
  const { groupedEntities, activeEntities, selectedEntity, setSelectedEntity, currentYear } = useTimeline()

  const getWaypoint = (entity) =>
    entity.waypoints.filter(wp => wp.year <= currentYear).pop()

  return (
    <div className="pointer-events-auto" style={{ position: 'absolute', right: '1.25rem', top: '200px' }}>
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="w-60 bg-tactical-bg/85 border border-tactical-cyan/25 backdrop-blur-sm corner-decoration"
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-tactical-cyan/20 bg-tactical-cyan/5">
          <Route size={12} className="text-tactical-cyan" />
          <span className="text-[10px] text-tactical-cyan tracking-[0.2em] uppercase">Entity Tracker</span>
          <span className="text-[9px] text-gray-500 ml-auto">{activeEntities.length} Active</span>
        </div>
        
        {/* Grouped entity list */}
        <div className="max-h-[380px] overflow-y-auto scrollbar-thin">
          <AnimatePresence mode="popLayout">
            {groupedEntities.length === 0 && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-3 text-center text-[10px] text-gray-600 font-mono"
              >
                No active entities
              </motion.div>
            )}

            {groupedEntities.map(group => (
              <motion.div
                key={group.type}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                layout
              >
                {/* Group header */}
                <div className="px-3 pt-2 pb-1 flex items-center gap-1.5">
                  <span className="text-[8px] text-gray-500 uppercase tracking-[0.25em] font-bold">
                    {group.label}
                  </span>
                  <div className="flex-1 h-px bg-tactical-cyan/10" />
                  <span className="text-[8px] text-gray-600">{group.entities.length}</span>
                </div>

                {/* Entity rows */}
                <div className="px-2 pb-1 space-y-0.5">
                  {group.entities.map(entity => {
                    const isSelected = selectedEntity === entity.id
                    const wp = getWaypoint(entity)

                    return (
                      <motion.button
                        key={entity.id}
                        layout
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedEntity(isSelected ? null : entity.id)}
                        className={`w-full text-left px-2 py-1.5 rounded-sm border transition-all duration-150 font-mono group
                          ${isSelected
                            ? 'border-tactical-cyan/40 bg-tactical-cyan/10'
                            : 'border-transparent hover:border-tactical-cyan/20 hover:bg-tactical-cyan/5'
                          }
                        `}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{
                              backgroundColor: entity.color,
                              boxShadow: `0 0 5px ${entity.color}80`,
                            }}
                          />
                          <span className="text-[10px] font-bold text-white truncate">
                            {entity.name}
                          </span>
                        </div>
                        {wp && (
                          <div className="flex items-center gap-1 mt-0.5 pl-3.5 min-w-0">
                            <Navigation size={7} className="shrink-0" style={{ color: entity.color }} />
                            <span className="text-[8px] text-gray-500 truncate">{wp.label}</span>
                          </div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
