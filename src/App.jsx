import React, { useState } from 'react'
import { RadarView } from './RadarView'
import { SearchLocation } from './SearchLocation'
import { WeatherInfo } from './WeatherInfo'

export const App = () => {
  const [city, setCity] = useState({})

  const onAddCity = (newCity) => {
    console.log('nova', newCity)
    setCity(newCity)
  }
  return (
    <div className="container mx-auto max-w-md">
        <SearchLocation onNewCity={ (value) => onAddCity(value) }/>

        <div className='mt-20'>
        <WeatherInfo city = {city}/>
        </div>
        <div className='mt-20'>
        <RadarView city = {city}/>
        </div>
    </div>
  )
}
