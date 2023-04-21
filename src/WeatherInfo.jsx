/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react'
import { useFetchData } from './hooks/useFetchData'

// All requests made with the client will be authenticated

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
    <div className= 'grid grid-cols-2 bg-gradient-to-r from-blue-800 via-blue-500 to-sky-400 p-6  rounded-xl shadow-lg '>
        <div className='  '>
          <h1 className='text-cyan-50  text-4xl'>{name}, {state}, {country}</h1>
          <div className='grid justify-items-center '>
            <div >
              <img className='w-80 h-80' src={`src/iconsV2/openweathermap/${dataWeather.icon}.svg`} alt=" " />
            </div>
            <div className=''>
              <p className=' text-cyan-50 text-8xl font-sans'>{dataWeather.temp} º</p>

            </div>
            <div className=''>{}</div>
          </div>
        </div>

        <div className=' shadow-2xl  rounded-xl mx-5 my-5 flex flex-wrap  '>

          <div className='  bg-cyan-200  shadow-2xl p-3 rounded-xl items-center flex  flex-wrap w-full my-2 mx-2'>
            <label className='basis-1/4'>Humedad</label>
            <p className='basis-2/4 text-5xl font-sans flex justify-center text- shadow-2xl text-neutral-600 bg-cyan-400 rounded-lg'>
              {dataWeather.feels}
              <label className='font-sans text-xs flex flex-col justify-center  text-neutral-600' > %</label>
              </p>
            <img className='basis-1/4 w-28 h-28' src= "src/iconsV2/openweathermap/humidity.svg" alt=" " />

          </div>

          <div className='  bg-cyan-200  shadow-lg p-3 rounded-xl items-center flex  flex-wrap w-full my-2 mx-2'>
            <label className='basis-1/4'>Sensación</label>
            <p className='basis-2/4 text-5xl font-sans flex justify-center text- shadow-2xl text-neutral-600 bg-cyan-400 rounded-lg'>
              {dataWeather.feels}
              <label className='font-sans text-xl flex flex-col text-neutral-600' > º</label>
              </p>
            <img className='basis-1/4 w-28 h-28' src= "src/iconsV2/openweathermap/thermometer-celsius.svg" alt=" " />

          </div>
          <div className='  bg-cyan-200  shadow-lg p-3 rounded-xl items-center flex  flex-wrap w-full my-2 mx-2'>
            <label className='basis-1/4'>Presión</label>
            <p className='basis-2/4 text-5xl font-sans flex justify-center text- shadow-2xl  text-neutral-600 bg-cyan-400 rounded-lg'>
              {dataWeather.pressure}
              <label className='font-sans text-xs flex flex-col-reverse ml-1 text-neutral-600' > hPa</label>
              </p>
            <img className='basis-1/4 w-28 h-28' src= "src/iconsV2/openweathermap/barometer.svg" alt=" " />

          </div>

          <div className='  bg-cyan-200  shadow-lg p-3 rounded-xl items-center flex  flex-wrap w-full my-2 mx-2'>
            <label className='basis-1/4'>Viento</label>
            <p className='basis-2/4 text-5xl font-sans flex justify-center text- shadow-2xl  text-neutral-600 bg-cyan-400 rounded-lg'>
              {dataWeather.windS}
              <label className='font-sans text-xs flex flex-col text-neutral-600 ' > km/h</label>
              </p>
            <img className='basis-1/4 w-28 h-28' src= "src/iconsV2/openweathermap/windsock.svg" alt=" " />

          </div>
        </div>

    </div>
  )
}
