/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './radar.css'
import './Radar/leaflet.rainviewer'

// import { useFetchData } from './hooks/useFetchData'

export const RadarView = ({ city }) => {
  console.log(city)
  const { lat, lon, name } = city
  if (!name) return
  const [location, setLocation] = useState(L.latLng(41.3828939, 2.1774322))

  // const { dataWeather } = useFetchData(city)

  // console.log('1r', dataWeather)
  const fetchData = () => {
    if (typeof lat === 'number' && typeof lon === 'number') {
      setLocation(L.latLng(lat,
        lon)

      )
    }
  }

  useEffect(() => {
    fetchData()
  }, [city])

  useEffect(() => {
    const map = L.map('mapid', {}).setView(location, 8)

    const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const osmAttrib = 'Map © <a href="https://openstreetmap.org">OpenStreetMap</a>'
    const osm = new L.TileLayer(osmUrl, {
      minZoom: 4,
      maxZoom: 10,
      attribution: osmAttrib
    })

    osm.addTo(map)

    const rainviewer = L.control.rainviewer({
      position: 'topright',
      nextButtonText: '>',
      playStopButtonText: <img className='leaflet-control-rainviewer-startstop' />,
      prevButtonText: '<',
      positionSliderLabelText: 'Time:',
      opacitySliderLabelText: 'Opacity:',
      animationInterval: 500,
      opacity: 0.3
    })

    rainviewer.addTo(map)

    return () => map.remove()
  }, [location])

  return (
    <div id='mapid' style={{ width: '120px', height: '100%', padding: 1 }}></div>
  )
}
