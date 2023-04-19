import { useEffect, useState } from 'react'
import { getData } from '../data/getData'

export const useFetchData = (city) => {
  const { name } = city
  if (!name) return
  const [dataWeather, setDataWeather] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getWeather = async () => {
    const newWeather = await getData(city)
    setDataWeather(newWeather)
    setIsLoading(false)
    console.log('newUseData', newWeather)
  }

  useEffect(() => {
    getWeather()
  }, [city])

  return {
    dataWeather,
    isLoading
  }
}
