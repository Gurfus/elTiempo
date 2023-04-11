import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './index.css'
import './LeafletRainviewer/leaflet.rainviewer'
import { getData } from './data/getData'

export const RadarView = () => {
  getData('sant joan de les abadesses')
  const location = ({
    lat:
    42.1982,
    lng: 2.1932496
  })

  useEffect(() => {
    const map = L.map('mapid', {}).setView(location, 6)

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
      playStopButtonText: <img className='leaflet-control-rainviewer-startstop '></img>,
      prevButtonText: '<',
      positionSliderLabelText: 'Time:',
      opacitySliderLabelText: 'Opacity:',
      animationInterval: 500,
      opacity: 0.5

    })
    rainviewer.addTo(map)

    return () => map.remove()
  }, [])

  return (
    <>

       <div id="mapid" style={{ width: '320px', height: '320px', padding: 0 }} ></div>
    </>

  )
}
