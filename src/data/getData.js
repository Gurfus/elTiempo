
export const getData = async (city) => {
  if (!city) return
  const callAemet = 'https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/0324A/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmZXJyYW5lY2hhdmVzQGdtYWlsLmNvbSIsImp0aSI6IjY5NWY2NmY5LWM0NTktNGNlMy1hNjBmLWY4MDIzMjVkMjFiYiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjgwNDU2NDIwLCJ1c2VySWQiOiI2OTVmNjZmOS1jNDU5LTRjZTMtYTYwZi1mODAyMzI1ZDIxYmIiLCJyb2xlIjoiIn0.phY2w44wxC5Lk5Qz3mYDaYjpatsRFifWvpSP79c4-lc'
  const API = '86de2ac1b1596ea76e01e38025320824'

  const callGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API}`
  const respG = await fetch(callGeo)
  const dataG = await respG.json()
  if (city.toLowerCase() === 'sant joan de les abadesses') {
    const respAEMET = await fetch(callAemet)
    const dataAEMET = await respAEMET.json()

    const respAEMET2 = await fetch(dataAEMET.datos)
    const dataAEMET2 = await respAEMET2.json()
    console.log({ dataAEMET2 })
  } else {
    const callWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${dataG[0].lat}&lon=${dataG[0].lon}&appid=${API}&units=metric`
    const respW = await fetch(callWeather)
    const dataW = await respW.json()
    console.log({ dataG })
    console.log({ dataW })
    const weather = {
      id: dataW.id,
      name: dataG[0].name,
      temp: dataW.main.temp,
      feels: dataW.main.feels_like,
      humidity: dataW.main.humidity,
      tempMax: dataW.main.temp_max,
      tempMin: dataW.main.temp_min,
      urlIcon: `https://openweathermap.org/img/wn/${dataW.weather[0].icon}@2x.png`,
      wind: [dataW.wind.deg, dataW.wind.speed],
      lat: dataG[0].lat,
      lng: dataG[0].lon
    }
    console.log(weather)

    return weather
  }
}
