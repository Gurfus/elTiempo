/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { getGeo } from './data/getGeo'

export const SearchLocation = ({ onNewCity }) => {
  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  const onInputChange = async ({ target }) => {
    setInputValue(target.value)
    if (target.value.trim().length >= 3) {
      const results = await getGeo(target.value.trim())
      setSearchResults(results)
      setShowResults(true)
    } else {
      setSearchResults([])
      setShowResults(false)
    }
  }

  const onSelectResult = (result) => {
    setInputValue(result.name)
    setSearchResults([])
    setShowResults(false)
    onNewCity(result)
  }

  return (
    <div className="flex justify-center relative">
      <div className=" w-full">
        <form>
          <input
            type="text"
            placeholder="Buscar Ciudad"
            className="w-full py-2 px-4 border mb-2 rounded-md bg-white"
            value={inputValue}
            onChange={onInputChange}
          />
        </form>
        {showResults && (
          <div className=" w-full top-full left-0 mt-1 p-2 bg-blue-600 border border-gray-300 rounded-md shadow-md z-10">
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="py-2 px-4 cursor-pointer bg-white my-1 hover:bg-blue-100 rounded-md transition-all duration-300 ease-in-out"
                onClick={() => onSelectResult(result)}
              >
                <p className="text-lg font-semibold">{result.name}</p>
                <p className="text-sm font-medium text-gray-500">{result.country}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
