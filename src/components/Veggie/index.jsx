import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../../Api'
import CardContainer from '../CardContainer'

const Veggie = () => {
  const [veggie, setVeggie] = useState([])

  const getVeggie = async () => {
    const popularFromSessionStorage = sessionStorage.getItem('veggie')
    if (popularFromSessionStorage) {
      setVeggie(JSON.parse(popularFromSessionStorage))
      return
    }
    const recipes = await fetchRecipes('vegetarian', 9)
    setVeggie(recipes)
    sessionStorage.setItem('veggie', JSON.stringify(recipes))
  }

  useEffect(() => {
    getVeggie()
  }, [])

  return (
    <CardContainer recipes={veggie} title={'Vegetarian Recipes'} perPage={4} />
  )
}

export default Veggie
