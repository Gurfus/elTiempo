/* eslint-disable react/prop-types */
import React, { useState } from 'react'

export const Forecast = ({ forecast }) => {
  if (!forecast) return null

  const registros = forecast.dataF.list

  const temperaturas = {}
  function formatDay (dateString) {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
    const date = new Date(dateString)
    const day = days[date.getDay()]
    const month = date.getMonth() + 1
    const dayOfMonth = date.getDate()
    return `${day}`
  }

  registros.forEach((registro) => {
    const fechaRegistro = new Date(registro.dt_txt)
    const fecha = `${fechaRegistro.getFullYear()}-${fechaRegistro.getMonth() + 1}-${fechaRegistro.getDate()}`

    if (!temperaturas[fecha]) {
      temperaturas[fecha] = {
        temp_min: registro.main.temp_min,
        temp_max: registro.main.temp_max,
        weather: registro.weather // añadir información del clima a cada día
      }
    } else {
      if (registro.main.temp_min < temperaturas[fecha].temp_min) {
        temperaturas[fecha].temp_min = registro.main.temp_min
      }
      if (registro.main.temp_max > temperaturas[fecha].temp_max) {
        temperaturas[fecha].temp_max = registro.main.temp_max
      }
      temperaturas[fecha].weather = registro.weather // actualizar información del clima para cada día
    }
  })

  const temperatureList = Object.values(temperaturas)
  const temKey = Object.keys(temperaturas)

  const iconCounts = {}

  temperatureList.forEach((dayData, index) => {
    const date = temKey[index]
    iconCounts[date] = {}
    dayData.weather.forEach((weatherData) => {
      const icon = weatherData.icon
      if (!iconCounts[date][icon]) {
        iconCounts[date][icon] = 0
      }
      iconCounts[date][icon]++
    })
  })
  const mostFrequentIcons = {}

  Object.keys(iconCounts).forEach((day) => {
    let maxCount = 0
    let mostFrequentIcon = null
    Object.keys(iconCounts[day]).forEach((icon) => {
      if (iconCounts[day][icon] > maxCount) {
        maxCount = iconCounts[day][icon]
        mostFrequentIcon = icon
      }
    })
    mostFrequentIcons[day] = mostFrequentIcon
  })

  console.log(mostFrequentIcons[`day${1 + 1}`])

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 my-4">
    <div className="font-medium text-lg text-center mb-4">Previsión 3 días</div>
    <hr className='my-2'/>
    <div className="grid grid-cols-3 gap-2">
      {temperatureList.map((dayData, index) => (
        <div key={index} className="flex border rounded-xl flex-col items-center">
          <div className="text-gray-600">{formatDay(temKey[index])}</div>
          <div className="h-12 w-12 ">
            <img src={`src/iconsV2/openweathermap/${mostFrequentIcons[`day${index + 1}`]}.svg`} alt="Icon" className="h-full w-full object-contain"/>
          </div>
          <div className="text-gray-600">{dayData.temp_max}&deg; / {dayData.temp_min}&deg;</div>
        </div>
      ))}
    </div>
  </div>

  // <div className="bg-white rounded-lg shadow-lg p-4 my-4">
  //   <div className="font-medium text-lg text-center mb-4">Previsión 3 días </div>
  //   <hr className='my-2'/>
  //   <div className="grid grid-cols-5 gap-2">
  //     {forecast.dataF.list.map((dayData, index) => (

  //       <div key={index} className="flex flex-col items-center">
  //         <div className="text-gray-600">{dayData.dt_txt}</div>
  //         <div className="h-12 w-12 ">
  //           <img src={`src/iconsV2/openweathermap/${dayData.weather[0].icon}.svg`} alt="Icon" className="h-full w-full object-contain"/>
  //         </div>
  //         <div className="text-gray-600">{dayData.main.temp_max}&deg; / {dayData.main.temp_min}&deg;</div>
  //       </div>
  //     ))}
  //   </div>
  // </div>

  )
}
