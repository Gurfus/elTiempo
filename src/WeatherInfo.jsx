/* eslint-disable react/prop-types */

import React from 'react'

// All requests made with the client will be authenticated

export const WeatherInfo = ({ city, dataWeather, lang }) => {
  const { name, state, country } = city

  if (!name) return

  return (

    <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500 rounded-3xl shadow-xl p-4 h-full">
      <p className="text-2xl font-sans  text-white ">{lang}, {state}, {country}</p>
    <div className="flex justify-center items-center mb-4">
      <h3 className="font-bold text-lg"></h3>

      <div className="flex items-center justify-center  ">

      <div className="h-64 w-64">
        <img src={`src/iconsV2/openweathermap/${dataWeather.icon}.svg`} alt="Icon" className="h-full w-full object-contain"/>
      </div>

      </div>
    </div>
    <p className="text-7xl font-bold  text-cyan-300 ">{dataWeather.temp} ºC</p>
    <p className="text-cyan-400 text-xl capitalize mb-4 mt-2">{dataWeather.description}</p>
    <hr className="mb-4" />
    <div className="grid grid-cols-2 gap-2 bg-white rounded-xl shadow-xl">
      <div className="flex items-center">
      <div className="h-12 w-12">
        <img src="src/iconsV2/openweathermap/barometer.svg" alt="Icon" className="h-full w-full object-contain"/>
      </div>
        <span className="text-cyan-700 text-xl font-bold">{dataWeather.pressure} hPa</span>
      </div>
      <div className="flex items-center">
      <div className="h-12 w-12">
        <img src="src/iconsV2/openweathermap/humidity.svg" alt="Icon" className="h-full w-full object-contain"/>
      </div>
        <span className="text-cyan-700 text-xl font-bold">{dataWeather.humidity}%</span>
      </div>
      <div className="flex items-center">
      <div className="h-12 w-12">
        <img src="src/iconsV2/openweathermap/thermometer-celsius.svg" alt="Icon" className="h-full w-full object-contain"/>
      </div>
        <span className="text-cyan-700 text-xl font-bold">{dataWeather.feels}°</span>
      </div>
      <div className="flex items-center">
      <div className="h-12 w-12">
        <img src="src/iconsV2/openweathermap/windsock.svg" alt="Icon" className="h-full w-full object-contain"/>
      </div>
        <span className="text-cyan-700 text-xl font-bold">{dataWeather.windS} km/h</span>
      </div>
    </div>
  </div>
  )
}
