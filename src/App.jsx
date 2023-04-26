import React, { useState } from 'react'
import { CardView } from './CardView'

import { SearchLocation } from './SearchLocation'

export const App = () => {
  const [city, setCity] = useState({})

  const onAddCity = (newCity) => {
    setCity(newCity)
  }
  return (

    <div className='  bg-sky-800  '>
      <div className='flex items-center justify-center p-2'>
        <h1 className='items-center flex text-4xl text-white font-extrabold   justify-center'>WeatherApp</h1>
        <hr className=' mx-5'/>
      </div>
      <div className='flex items-center justify-center my-5'>
        <SearchLocation onNewCity={ (value) => onAddCity(value) }/>
      </div>

      <div className="container mx-auto my-10  ">
        <CardView city={city}/>
    </div>

    </div>

  )
}
