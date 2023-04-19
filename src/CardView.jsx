/* eslint-disable react/prop-types */
import React from 'react'
import { RadarView } from './RadarView'
import { WeatherInfo } from './WeatherInfo'

export const CardView = ({ city }) => {
  console.log('cardCity', city)
  return (
    <div>
        <div className='mt-20'>
        <WeatherInfo city = {city}/>
        </div>
        <div className='mt-20'>
        <RadarView city = {city}/>
        </div>
    </div>
  )
}
