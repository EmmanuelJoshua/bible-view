import React, { createContext, useContext, useState, useMemo, useCallback } from 'react'
import { BIBLICAL_TIMELINE, ERAS, ERA_LABELS, ERA_COLORS } from '../data/timeline'
import { ENTITY_PATHS } from '../data/entities'

const TimelineContext = createContext()

export function TimelineProvider({ children }) {
  const [currentYear, setCurrentYear] = useState(-4000)
  const [selectedEntity, setSelectedEntity] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  
  const currentEvent = useMemo(() => {
    let latest = BIBLICAL_TIMELINE[0]
    for (const item of BIBLICAL_TIMELINE) {
      if (currentYear >= item.year) {
        latest = item
      } else {
        break
      }
    }
    return latest
  }, [currentYear])

  const currentEra = currentEvent.era
  const eraLabel = ERA_LABELS[currentEra] || currentEra
  const eraColor = ERA_COLORS[currentEra] || '#00f3ff'

  // Get all active entities for current year
  const activeEntities = useMemo(() => {
    return ENTITY_PATHS.filter(entity => {
      const firstYear = entity.waypoints[0]?.year
      const lastYear = entity.waypoints[entity.waypoints.length - 1]?.year
      return currentYear >= firstYear && currentYear <= lastYear + 50
    })
  }, [currentYear])

  // Format year for display
  const formatYear = useCallback((year) => {
    if (year < 0) return `${Math.abs(year)} BC`
    return `${year} AD`
  }, [])

  const value = {
    currentYear,
    setCurrentYear,
    currentEra,
    eraLabel,
    eraColor,
    currentEvent,
    timelineData: BIBLICAL_TIMELINE,
    ERAS,
    ERA_LABELS,
    ERA_COLORS,
    activeEntities,
    selectedEntity,
    setSelectedEntity,
    isPlaying,
    setIsPlaying,
    formatYear,
    entityPaths: ENTITY_PATHS,
  }

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  )
}

export const useTimeline = () => {
  const context = useContext(TimelineContext)
  if (context === undefined) {
    throw new Error('useTimeline must be used within a TimelineProvider')
  }
  return context
}
