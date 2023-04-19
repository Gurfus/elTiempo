import React, { useState } from 'react'
import { getGeo } from './data/getGeo'

// eslint-disable-next-line react/prop-types
export const SearchLocation = ({ onNewCity }) => {
  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const onInputChange = async ({ target }) => {
    setInputValue(target.value)
    if (target.value.trim().length >= 3) {
      const results = await getGeo(target.value.trim())
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }

  const onSelectResult = (result) => {
    setInputValue(result.name)
    setSearchResults([])
    onNewCity(result)
  }

  // const onSubmit = (event) => {
  //   event.preventDefault()
  //   if (inputValue.trim().length <= 1) return

  //   setInputValue('')
  //   onNewCity(inputValue.trim())
  // }

  return (
    <div className="p-4 relative">
  <form >
    <input
      type="text"
      placeholder="Buscar Ciudad"
      className="w-full py-2 px-4 border rounded-md bg-blue-100"
      value={inputValue}
      onChange={onInputChange}
    />
  </form>
  {searchResults.length > 0 && (
  <div className="absolute top-full left-0 right-0 mt-1 p-2 bg-blue border border-gray-300 rounded-md shadow-md">
    {searchResults.map((result) => (
      <div
        key={result.id}
        className="py-2 px-4 cursor-pointer hover:bg-blue-200 rounded-md transition-all duration-300 ease-in-out"
        onClick={() => onSelectResult(result)}
      >
        <p className="text-lg font-semibold">{result.name}</p>
        <p className="text-sm font-medium text-gray-500">{result.state},{result.country}</p>
      </div>
    ))}
  </div>
  )}

</div>

  )
}
