import React, { useState } from 'react'
import { RadarView } from './RadarView'
import { SearchLocation } from './SearchLocation'

export const App = () => {
  const [city, setCity] = useState('')

  const onAddCity = (newCity) => {
    setCity(newCity)
  }
  return (
    <div>
        <SearchLocation onNewCity={ (value) => onAddCity(value) }/>
        <RadarView city = {city}/>
    </div>
  )
}
