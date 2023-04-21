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
    <div className="container mx-auto flex flex-wrap">
        <SearchLocation onNewCity={ (value) => onAddCity(value) }/>

          <div className=''>
          <CardView city={city} />
          </div>

    </div>
  )
}
