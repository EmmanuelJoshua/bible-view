import * as THREE from 'three'

// Convert Lat/Lng to Vector3 on a sphere of a given radius
export function latLongToVector3(lat, lng, radius = 2) {
  // Latitude is measured from the equator (-90 to 90)
  // Longitude is measured from the prime meridian (-180 to 180)
  
  // Convert standard lat/long coords to spherical coordinates
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)

  // Calculate Cartesian coordinates
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const y = radius * Math.cos(phi)
  const z = radius * Math.sin(phi) * Math.sin(theta)

  return new THREE.Vector3(x, y, z)
}
