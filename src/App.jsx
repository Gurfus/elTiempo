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

    <div className='bg-blue-900'>
      <SearchLocation onNewCity={ (value) => onAddCity(value) }/>

      <div className="container mx-auto my-10 rounded-xl ">
        <CardView city={city}/>
    </div>

    </div>

  )
}
