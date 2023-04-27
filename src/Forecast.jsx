/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { forecastFormat } from './helpers/forecastFormat'

export const Forecast = ({ onShowdetails, forecast }) => {
  if (!forecast) return null
  const [showDetaisl, setShowDetails] = useState(false)
  const registros = forecast.dataF.list
  const { temperaturas, formatDay } = forecastFormat(registros)

  const temperatureList = Object.values(temperaturas)
  const temKey = Object.keys(temperaturas)

  const onClickDetails = () => {
    if (showDetaisl) {
      setShowDetails(false)
      onShowdetails(false)
    } else {
      setShowDetails(true)
      onShowdetails(true)
    }
  }
  return (
    <div className="bg-white rounded-lg shadow-xl p-4 my-4">
    <div className="font-medium text-lg text-center mb-4">Previsión 5 días - {forecast.dataF.city.name}</div>
    <hr className='my-2 border border-cyan-400'/>
    <div className="grid grid-cols-6 gap-2">
      {temperatureList.map((dayData, index) => (
        <div onClick={onClickDetails} key={index} className="flex  border-4 border-cyan-400 bg-slate-300 opacity-95 hover:bg-blue-200 rounded-xl flex-col items-center">
          <div className=" text-cyan-700">{formatDay(temKey[index])}</div>
          <div className="h-12 w-12 ">
          <img src={`src/iconsV2/openweathermap/${dayData.iconFinal ? dayData.iconFinal : forecast.dataF.list[0].weather[0].icon.slice(0, 2)}d.svg`} alt="Icon" className="h-full w-full object-contain"/>

          </div>
          <div className="text-cyan-700">{dayData.temp_max.toFixed(0)}º - {dayData.temp_min.toFixed(0)}º</div>
        </div>
      ))}
    </div>
    <div className='flex justify-end mt-1 bg h-1/4'>
      <button onClick={ onClickDetails} className='text-cyan-600 bg-white p-1   rounded-md'>Detallado

      </button>

    </div>

  </div>

  )
}
