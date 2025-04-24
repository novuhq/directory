"use client"

import { useState, useEffect } from "react"

// Mock clinic locations
const clinicLocations = [
  { id: 1, name: "New York Downtown", lat: 40.7128, lng: -74.006 },
  { id: 2, name: "San Francisco Bay", lat: 37.7749, lng: -122.4194 },
  { id: 3, name: "Chicago Loop", lat: 41.8781, lng: -87.6298 },
  { id: 4, name: "Boston Medical", lat: 42.3601, lng: -71.0589 },
  { id: 5, name: "Los Angeles Central", lat: 34.0522, lng: -118.2437 },
]

export function ClinicMap() {
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // In a real implementation, you would load a map library like Google Maps or Mapbox
    // For this example, we'll just simulate a map with a placeholder
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-full bg-gray-100">
      {!mapLoaded ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 mb-2">Interactive map would display here</p>
            <p className="text-sm text-gray-400">Showing {clinicLocations.length} clinic locations</p>
          </div>
        </div>
      )}
    </div>
  )
}
