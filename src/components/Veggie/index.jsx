import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../../Api'
import CardContainer from '../CardContainer'
import Spinner from '../Spinner'

const Veggie = () => {
  const [veggie, setVeggie] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const getVeggie = async () => {
    try {
      setIsFetching(true)
      const popularFromSessionStorage = sessionStorage.getItem('veggie')
      if (popularFromSessionStorage) {
        setVeggie(JSON.parse(popularFromSessionStorage))
        setIsFetching(false)
        return
      }
      const data = await fetchRecipes('random', 'tags', 'vegetarian', 9)
      setVeggie(data.recipes)
      sessionStorage.setItem('veggie', JSON.stringify(data.recipes))
      setIsFetching(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getVeggie()
  }, [])

  return (
    <>
      {' '}
      {!isFetching ? (
        <CardContainer
          recipes={veggie}
          title={'Vegetarian Recipes'}
          perPage={3}
        />
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default Veggie
