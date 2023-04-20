/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react'
import { useFetchData } from './hooks/useFetchData'

export const WeatherInfo = ({ city }) => {
  const { name, state, country } = city
  if (!name) return
  const { dataWeather } = useFetchData(city)
  const [weather, setWeather] = useState({})

  const fetchData = () => {
    if (dataWeather && typeof dataWeather.lat === 'number' && typeof dataWeather.lng === 'number') {
      setWeather(dataWeather)
    }
  }
  useEffect(() => {
    fetchData()
  }, [weather, dataWeather])
  return (
    <div className= 'grid grid-cols-2 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-400 p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-lg '>
        <div className='  '>
          <h1 className='text-slate-100'>{name}, {state}, {country}</h1>
          <div className='grid justify-items-center '>
            <div >

              <img className='w-64 h-64' src={`src/iconsV2/openweathermap/${dataWeather.icon}.svg`} alt=" " />
            </div>

          <div className=''>
           <p className=' text-slate-100 text-8xl font-sans'>{dataWeather.temp} Cº</p>

          </div>
          </div>
        </div>
        <div className='  mt-10  space-y-3 '>
          <div className='  bg-gray-100  shadow-lg p-3 rounded-xl items-center  flex space-x-2'>
            <label>Humedad </label>
            <p className=' text-lg font-sans text-black'>{dataWeather.humidity} %</p>
            <img className='w-28 h-28' src= "src/iconsV2/openweathermap/humidity.svg" alt=" " />
          </div>
        <div className='  bg-gray-100  shadow-lg p-3 rounded-xl items-center flex space-x-2 '>
            <label>Sensacion de </label>
            <p className='text-lg font-sans text-black'>{dataWeather.feels} Cº</p>

            <img className='w-28 h-28' src= "src/iconsV2/openweathermap/thermometer-celsius.svg" alt=" " />

        </div>
        <div className='  bg-gray-100  shadow-lg p-3 rounded-xl items-center flex space-x-2   '>
            <label>Presión </label>
            <p className='text-lg font-sans text-black'>{dataWeather.pressure} hPa</p>
            <img className='w-28 h-28' src= "src/iconsV2/openweathermap/barometer.svg" alt=" " />
        </div>
        <div className='  bg-gray-100  shadow-lg p-3 rounded-xl items-center flex space-x-2  '>
            <label>Viento  </label>
            <p className='text-lg font-sans text-black'>{dataWeather.windS} Km/h</p>
            <img className='w-28 h-28' src= "src/iconsV2/openweathermap/windsock.svg" alt=" " />
        </div>
        </div>

    </div>
  )
}
