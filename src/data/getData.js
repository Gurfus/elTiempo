/* eslint-disable camelcase */

export const getData = async (city) => {
  const { lat, lon, name, local_names } = city
  const { es, ca } = local_names

  if (!name) return
  // const callAemet = 'https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/0324A/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmZXJyYW5lY2hhdmVzQGdtYWlsLmNvbSIsImp0aSI6IjY5NWY2NmY5LWM0NTktNGNlMy1hNjBmLWY4MDIzMjVkMjFiYiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjgwNDU2NDIwLCJ1c2VySWQiOiI2OTVmNjZmOS1jNDU5LTRjZTMtYTYwZi1mODAyMzI1ZDIxYmIiLCJyb2xlIjoiIn0.phY2w44wxC5Lk5Qz3mYDaYjpatsRFifWvpSP79c4-lc'
  const API = '86de2ac1b1596ea76e01e38025320824'

  const callWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric&lang=sp`
  const respW = await fetch(callWeather)
  const dataW = await respW.json()

  console.log({ dataW })

  const callForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric&lang=sp`
  const respF = await fetch(callForecast)
  const dataF = await respF.json()
  const forecast = { dataF }

  console.log(forecast)
  const weather = {
    id: dataW.id,
    name,
    es,
    ca,
    temp: dataW.main.temp.toFixed(1),
    feels: dataW.main.feels_like.toFixed(1),
    humidity: dataW.main.humidity,
    tempMax: dataW.main.temp_max,
    tempMin: dataW.main.temp_min,
    pressure: dataW.main.pressure,
    urlIcon: `https://openweathermap.org/img/wn/${dataW.weather[0].icon}@2x.png`,
    windS: (dataW.wind.speed * 3.6).toFixed(1),
    windD: dataW.wind.deg,
    lat,
    lng: lon,
    icon: dataW.weather[0].icon,
    description: dataW.weather[0].description,
    forecast
  }
  console.log(weather)

  return weather
}
