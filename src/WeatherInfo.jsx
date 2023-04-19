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
    <>
        <h1>{name}, {state}, {country}</h1>
        <div>
            <label>Temperatura actual: </label>
            <span><p>{dataWeather.temp} Cº</p></span>
        </div>
        <div>
            <label>Humedad: </label>
            <span><p>{dataWeather.humidity} %</p></span>
        </div>

        <div>
            <label>Sensacion de: </label>
            <span><p>{dataWeather.feels} Cº</p></span>
        </div>
        <div>
            <label>Presión: </label>
            <span><p>{dataWeather.pressure} hPa</p></span>
        </div>

        <img src={dataWeather.urlIcon} alt=" " />
    </>
  )
}
