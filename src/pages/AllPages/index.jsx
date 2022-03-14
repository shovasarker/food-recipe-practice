import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CuisinePage from '../CuisinePage'
import HomePage from '../HomePage'
import SearchedPage from '../SearchedPage'
const AllPages = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cuisine/:cuisineType' element={<CuisinePage />} />
      <Route path='/searched/:searchTerm' element={<SearchedPage />} />
    </Routes>
  )
}

export default AllPages
