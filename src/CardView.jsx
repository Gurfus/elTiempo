/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Forecast } from './Forecast'
import { useFetchData } from './hooks/useFetchData'
import { RadarView } from './RadarView'
import { WeatherInfo } from './WeatherInfo'
import { DetailsForecast } from './DetailsForecast'

export const CardView = ({ city }) => {
  const { name } = city

  if (!name) return
  const [showDetaisl, setShowDetails] = useState(false)
  const { dataWeather } = useFetchData(city)

  const [lang, setlang] = useState()
  const { ca, es } = dataWeather

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

  const onShowdetails = (newState) => {
    if (newState) {
      setShowDetails(newState)
    } else {
      setShowDetails(newState)
    }
  }

  return (
    <div className="bg-transparent rounded-xl  p-4 my-4 mx-auto">
  <div className="grid grid-rows-1 sm:grid-rows-2 gap-4  lg:grid-rows-1 lg:grid-cols-2  mx-auto p-2 bg-transparent rounded-2xl  ">
    <div className="rounded-3xl shadow-xl border-4 border-cyan-300 bg-white p-4">
      <WeatherInfo city={city} dataWeather={dataWeather} lang={lang}/>
    </div >
    <div className=" p-4  border-4 border-cyan-300 rounded-xl bg-white shadow-xl">
    <RadarView city={city} />

    </div>

    <div className="sm:col-auto lg:col-span-2 p-4 flex  flex-col">

      <Forecast onShowdetails={ (value) => onShowdetails(value) }forecast={dataWeather.forecast}/>

    </div>
    <div className='sm:col-auto lg:col-span-2  p-4'>
    {
      showDetaisl && (
      <DetailsForecast onShowdetails={showDetaisl} forecast={dataWeather.forecast}/>

      )

    }
    </div>

  </div>
</div>

  )
}
