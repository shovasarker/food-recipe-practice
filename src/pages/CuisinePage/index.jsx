import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipes } from '../../Api'
import Spinner from '../../components/Spinner'
import CustomGrid from '../../components/CustomGrid'

const CuisinePage = () => {
  const [cuisines, setCuisines] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const { cuisineType } = useParams()

  const getCuisine = async (cuisineType) => {
    try {
      setIsFetching(true)
      const data = await fetchRecipes(
        'complexSearch',
        'cuisine',
        cuisineType,
        20
      )
      setCuisines(data.results)
      setIsFetching(false)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getCuisine(cuisineType)
  }, [cuisineType])

  return (
    <>
      <h3>{cuisineType} Cuisines</h3>
      {!isFetching ? <CustomGrid recipes={cuisines} /> : <Spinner />}
    </>
  )
}

export default CuisinePage
