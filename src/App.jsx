import React, { useState } from 'react'
import { CardView } from './CardView'

import { SearchLocation } from './SearchLocation'

export const App = () => {
  const [city, setCity] = useState({})

  const onAddCity = (newCity) => {
    console.log('nova', newCity)
    setCity(newCity)
  }
  return (
    <div className=" w-screen h-scree bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">
        <SearchLocation onNewCity={ (value) => onAddCity(value) }/>

          <div className='card'>
          <CardView city={city} />
          </div>

    </div>
  )
}
