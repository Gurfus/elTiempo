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
    <div className="container mx-auto max-w-md">
        <SearchLocation onNewCity={ (value) => onAddCity(value) }/>

          <div className='card'>
          <CardView city={city} />
          </div>

    </div>
  )
}
