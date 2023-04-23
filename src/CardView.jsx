/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Forecast } from './Forecast'
import { useFetchData } from './hooks/useFetchData'
import { RadarView } from './RadarView'
import { WeatherInfo } from './WeatherInfo'

export const CardView = ({ city }) => {
  const { name } = city

  if (!name) return
  const { dataWeather } = useFetchData(city)
  console.log(dataWeather.forecast)
  const [lang, setlang] = useState()
  const { ca, es } = dataWeather
  console.log(ca, es)
  const fetchData = () => {
    if (es === undefined) {
      setlang(ca)
    } else {
      setlang(es)
    }
  }
  useEffect(() => {
    fetchData()
  }, [dataWeather])
  console.log('cardCity', city)
  return (
    <div className="bg-blue-900 rounded-xl  p-4 my-4 mx-auto">
  <div className="grid grid-rows-2 gap-4  lg:grid-cols-2  mx-auto p-2 bg-white rounded-2xl shadow-xl ">
    <div className="rounded-3xl shadow-xl bg-white p-4">
      <WeatherInfo city={city} dataWeather={dataWeather} lang={lang}/>
    </div >
    <div className=" p-4 rounded-xl bg-white shadow-xl">
    <RadarView city={city} />

    </div>

    <div className="sm:col-auto lg:col-span-2 shadow-xl p-4">

      <Forecast forecast={dataWeather.forecast}/>
    </div>
  </div>
</div>

  )
}
