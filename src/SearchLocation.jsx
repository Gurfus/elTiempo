import React, { useState } from 'react'
import { getData } from './data/getData'

// eslint-disable-next-line react/prop-types
export const SearchLocation = ({ onNewCity }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return

    // setCategories( categories => [ inputValue, ...categories ]);
    setInputValue('')
    // console.log(inputValue)
    getData((inputValue.trim()))
    onNewCity((inputValue.trim()))
  }

  return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Ciudad"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  )
}
