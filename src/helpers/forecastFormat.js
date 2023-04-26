
export const forecastFormat = (registros) => {
  const temperaturas = {}

  function formatDay (dateString) {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
    const date = new Date(dateString)

    const day = days[date.getDay()]

    return `${day} - ${date.getDate()}`
  }
  const iconCounts = {}
  registros.forEach((registro, index) => {
    const fechaRegistro = new Date(registro.dt_txt)
    const fecha = `${fechaRegistro.getFullYear()}-${fechaRegistro.getMonth() + 1}-${fechaRegistro.getDate()}`

    if (!temperaturas[fecha]) {
      temperaturas[fecha] = {
        temp_min: registro.main.temp_min,
        temp_max: registro.main.temp_max,
        weather: registro.weather,
        iconSys: registro.sys.pod,
        icon: registro.weather.icon,
        iconFinal: registro.weather.icon,
        dt: fechaRegistro // añadir información del clima a cada día
      }
    } else {
      if (registro.main.temp_min < temperaturas[fecha].temp_min) {
        temperaturas[fecha].temp_min = registro.main.temp_min
      }
      if (registro.main.temp_max > temperaturas[fecha].temp_max) {
        temperaturas[fecha].temp_max = registro.main.temp_max
      }
      if (registro.sys.pod === 'd') {
        temperaturas[fecha].icon = registro.weather[0].icon.slice(0, 2)
      } else if (registro.sys.pod === 'n') {
        temperaturas[fecha].icon = registro.weather[0].icon.slice(0, 2)
      }
      if (!iconCounts[fecha]) {
        iconCounts[fecha] = {}
      }

      // Obtenemos el icono actual
      const icon = registro.weather[0].icon.slice(0, 2)

      // Si no hemos contado este icono aún, lo inicializamos con un conteo de 0
      if (!iconCounts[fecha][icon]) {
        iconCounts[fecha][icon] = 0
      }

      // Incrementamos el conteo del icono actual para esta fecha
      iconCounts[fecha][icon]++
      temperaturas[fecha].weather = registro.weather
      // actualizar información del clima para cada día
    }
    // Calcular el icono con más repeticiones

    for (const fecha in iconCounts) {
      let maxIcon = ''
      let maxCount = 0
      for (const icon in iconCounts[fecha]) {
        const count = iconCounts[fecha][icon]
        if (count > maxCount) {
          maxIcon = icon
          maxCount = count
        }
      }
      temperaturas[fecha].iconFinal = maxIcon
    }

    // ue se repite más veces es ${temperaturas[fecha].iconFinal}, con un total de  repeticiones.`)
  })
  return { temperaturas, formatDay }
}
