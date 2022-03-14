import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../../Api'
import CardContainer from '../CardContainer'
import Spinner from '../Spinner'

const Popular = () => {
  const [popular, setPopular] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const getPopular = async () => {
    setIsFetching(true)
    const popularFromSessionStorage = sessionStorage.getItem('popular')
    if (popularFromSessionStorage) {
      setPopular(JSON.parse(popularFromSessionStorage))
      setIsFetching(false)
      return
    }
    const data = await fetchRecipes()
    setPopular(data.recipes)
    sessionStorage.setItem('popular', JSON.stringify(data.recipes))
    setIsFetching(false)
  }

  useEffect(() => {
    getPopular()
  }, [])

  return (
    <>
      {' '}
      {!isFetching ? (
        <CardContainer
          recipes={popular}
          title={'Popular Recipes'}
          perPage={5}
        />
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default Popular
