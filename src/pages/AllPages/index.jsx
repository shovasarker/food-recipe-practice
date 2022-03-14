import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import CuisinePage from '../CuisinePage'
import HomePage from '../HomePage'
import RecipePage from '../RecipePage'
import SearchedPage from '../SearchedPage'
const AllPages = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomePage />} />
        <Route path='/cuisine/:cuisineType' element={<CuisinePage />} />
        <Route path='/searched/:searchTerm' element={<SearchedPage />} />
        <Route path='/recipe/:recipeId' element={<RecipePage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AllPages
