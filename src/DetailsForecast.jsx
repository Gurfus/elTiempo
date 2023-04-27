/* eslint-disable react/prop-types */
import React from 'react'

export const DetailsForecast = ({ onShowdetails, forecast }) => {
  console.log(onShowdetails)
  function formatDay (dateString) {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
    const date = new Date(dateString)
    const hour = (date.getHours())
    const day = days[date.getDay()]

    return `${day} - ${hour}:00`
  }

  return (
    <div>
         {
        onShowdetails && (
          <div className="bg-white rounded-lg shadow-lg p-4 my-4">
      <div className="font-medium text-lg text-center mb-4">Previsión cada 3 horas - {forecast.dataF.city.name}</div>
      <hr className='my-2'/>
      <div className="grid grid-cols-8 sm:grid-cols-4 gap-2 ">

        {forecast.dataF.list.map((dayData, index) => (

          <div key={index} className="flex flex-col items-center border-4 border-cyan-400 bg-slate-300 opacity-95 rounded-xl">
            <div className="text-cyan-600">{formatDay(dayData.dt_txt)}</div>
            <div className="h-12 w-12 ">
              <img src={`src/iconsV2/openweathermap/${dayData.weather[0].icon}.svg`} alt="Icon" className="h-full w-full object-contain"/>
            </div>
            <div className="text-cyan-600">{dayData.main.temp_max.toFixed(0)}º - {dayData.main.temp_min.toFixed(0)}º</div>
          </div>
        ))}
      </div>
    </div>

        )

      }

    </div>

  )
}
