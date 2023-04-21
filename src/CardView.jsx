/* eslint-disable react/prop-types */
import React from 'react'
import { RadarView } from './RadarView'
import { WeatherInfo } from './WeatherInfo'

export const CardView = ({ city }) => {
  console.log('cardCity', city)
  return (
    <div className=''>
        <div className='grid justify-center items-center container mx-auto'>
        <WeatherInfo city = {city}/>
        </div>
        <div className=' grid justify-center items-center container mx-auto flex-wrap'>
        <RadarView city = {city}/>
        </div>
    </div>
  )
}
