import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { FormStyle } from './search-bar-styles'

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    setSearchText('')
    navigate(`searched/${searchText}`)
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        type='text'
        placeholder='Search Recipe by Name'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </FormStyle>
  )
}

export default SearchBar
