
export const getGeo = async (city) => {
  const API = '86de2ac1b1596ea76e01e38025320824'
  const callGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${API}`
  const respG = await fetch(callGeo)
  const dataG = await respG.json()
  console.log({ dataG })
  return dataG
}
