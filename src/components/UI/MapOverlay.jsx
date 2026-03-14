import React, { useEffect, useRef, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, Tooltip, useMap } from 'react-leaflet'
import L from 'leaflet'
import { useTimeline } from '../../context/TimelineContext'
import { ANCIENT_PLACES, PLACE_TYPE_STYLES } from '../../data/ancientPlaces'

const DARK_TILES = 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
const DARK_TILES_ATTR = '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
const INITIAL_ZOOM = 12
const MAX_ZOOM = 19
const FLY_DURATION = 1.5

function MapController({ location }) {
  const map = useMap()
  const prevLocation = useRef(null)

  useEffect(() => {
    if (!location) return
    const { lat, lng } = location
    if (
      prevLocation.current &&
      prevLocation.current.lat === lat &&
      prevLocation.current.lng === lng
    ) return

    prevLocation.current = { lat, lng }
    map.flyTo([lat, lng], INITIAL_ZOOM, { duration: FLY_DURATION })
  }, [location, map])

  return null
}

function AncientPlaceLabels() {
  const { currentEra } = useTimeline()

  const visiblePlaces = useMemo(() => {
    return ANCIENT_PLACES.filter(p => p.eras.includes(currentEra))
  }, [currentEra])

  return visiblePlaces.map((place, i) => {
    const style = PLACE_TYPE_STYLES[place.type] || PLACE_TYPE_STYLES.city
    const isRegion = place.type === 'region'
    const isWater = place.type === 'water'

    const icon = L.divIcon({
      className: 'ancient-place-icon',
      html: isRegion || isWater
        ? ''
        : `<div class="ancient-place-dot" style="background:${style.color}"></div>`,
      iconSize: [6, 6],
      iconAnchor: [3, 3],
    })

    return (
      <Marker
        key={`${place.name}-${i}`}
        position={[place.lat, place.lng]}
        icon={icon}
        interactive={false}
      >
        <Tooltip
          permanent
          direction="right"
          offset={[8, 0]}
          className={`ancient-label ancient-label--${place.type}`}
        >
          {place.name}
        </Tooltip>
      </Marker>
    )
  })
}

function EntityMarkers() {
  const { activeEntities, currentYear } = useTimeline()

  const markers = useMemo(() => {
    return activeEntities.map(entity => {
      const wps = entity.waypoints
      let wp = wps[0]
      for (const w of wps) {
        if (currentYear >= w.year) wp = w
        else break
      }
      return { id: entity.id, name: entity.name, color: entity.color, lat: wp.lat, lng: wp.lng, label: wp.label }
    })
  }, [activeEntities, currentYear])

  return markers.map(m => (
    <CircleMarker
      key={m.id}
      center={[m.lat, m.lng]}
      radius={6}
      pathOptions={{ color: m.color, fillColor: m.color, fillOpacity: 0.8, weight: 2 }}
    >
      <Popup className="tactical-popup">
        <span style={{ color: m.color, fontWeight: 'bold' }}>{m.name}</span>
        <br />
        <span style={{ fontSize: '11px', opacity: 0.8 }}>{m.label}</span>
      </Popup>
    </CircleMarker>
  ))
}

function EventMarker({ location, eventName }) {
  const icon = useMemo(() => L.divIcon({
    className: 'event-marker-icon',
    html: `<div class="event-marker-pulse"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  }), [])

  if (!location) return null

  return (
    <Marker position={[location.lat, location.lng]} icon={icon}>
      <Popup className="tactical-popup">
        <span style={{ color: '#00f3ff', fontWeight: 'bold' }}>{eventName}</span>
      </Popup>
    </Marker>
  )
}

export function MapOverlay() {
  const { currentEvent, mapVisible } = useTimeline()
  const location = currentEvent?.location

  if (!location) return null

  return (
    <div
      className="absolute inset-0 z-[5]"
      style={{
        opacity: mapVisible ? 1 : 0,
        pointerEvents: mapVisible ? 'auto' : 'none',
        transition: 'opacity 0.8s ease-in-out',
      }}
    >
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={INITIAL_ZOOM}
        maxZoom={MAX_ZOOM}
        minZoom={3}
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        style={{ width: '100%', height: '100%', background: '#050b14' }}
      >
        <TileLayer
          url={DARK_TILES}
          attribution={DARK_TILES_ATTR}
          maxZoom={MAX_ZOOM}
        />
        <MapController location={location} />
        <AncientPlaceLabels />
        <EventMarker location={location} eventName={currentEvent.name} />
        <EntityMarkers />
      </MapContainer>
    </div>
  )
}
