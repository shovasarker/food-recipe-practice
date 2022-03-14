import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchRecipes } from '../../Api'
import CustomGrid from '../../components/CustomGrid'
import Spinner from '../../components/Spinner'

const SearchedPage = () => {
  const [searched, setSearched] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const { searchTerm } = useParams()

  const getCuisine = async (searchTerm) => {
    setIsFetching(true)
    const data = await fetchRecipes('complexSearch', 'query', searchTerm, 20)
    setSearched(data.results)
    setIsFetching(false)
  }
  useEffect(() => {
    getCuisine(searchTerm)
  }, [searchTerm])

  return (
    <>
      {!isFetching ? (
        <>
          {searched?.length > 0 ? (
            <h3>Searched Results For "{searchTerm}"</h3>
          ) : (
            <h3>No Result Found For "{searchTerm}"</h3>
          )}
          <CustomGrid recipes={searched} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default SearchedPage
