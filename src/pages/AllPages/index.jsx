import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CuisinePage from '../CuisinePage'
import HomePage from '../HomePage'
const AllPages = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cuisine/:cuisineType' element={<CuisinePage />} />
    </Routes>
  )
}

export default AllPages
