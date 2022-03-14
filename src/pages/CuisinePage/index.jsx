import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { fetchRecipes } from '../../Api'
import { Card, Grid } from './cuisine-page.styles'
import Spinner from '../../components/Spinner'

const CuisinePage = () => {
  const [cuisines, setCuisines] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const { cuisineType } = useParams()

  const getCuisine = async (cuisineType) => {
    setIsFetching(true)
    const data = await fetchRecipes('complexSearch', 'cuisine', cuisineType, 20)
    setCuisines(data.results)
    setIsFetching(false)
  }
  useEffect(() => {
    getCuisine(cuisineType)
  }, [cuisineType])

  return (
    <>
      <h3>{cuisineType} Cuisines</h3>
      {!isFetching ? (
        <Grid>
          {cuisines?.map((recipe) => {
            return (
              <Card key={recipe?.id}>
                <img src={recipe?.image} alt={recipe.title} />
                <h4>{recipe?.title}</h4>
              </Card>
            )
          })}
        </Grid>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default CuisinePage
