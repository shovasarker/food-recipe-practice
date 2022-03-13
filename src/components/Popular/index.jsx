import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../../Api'
import CardContainer from '../CardContainer'

const Popular = () => {
  const [popular, setPopular] = useState([])

  const getPopular = async () => {
    const popularFromSessionStorage = sessionStorage.getItem('popular')
    if (popularFromSessionStorage) {
      setPopular(JSON.parse(popularFromSessionStorage))
      return
    }
    const recipes = await fetchRecipes()
    setPopular(recipes)
    sessionStorage.setItem('popular', JSON.stringify(recipes))
  }

  useEffect(() => {
    getPopular()
  }, [])

  return (
    <CardContainer recipes={popular} title={'Popular Recipes'} perPage={5} />
  )
}

export default Popular
