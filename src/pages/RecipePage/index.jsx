import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipeInfo } from '../../Api'
import Spinner from '../../components/Spinner'
import {
  Button,
  DetailsWrapper,
  Info,
  ImageContainer,
  ButtonContainer,
  Details,
  Title,
} from './recipe-page.styles'
import noImage from '../../images/no_image.jpg'

const RecipePage = () => {
  const [recipe, setRecipe] = useState({})
  const [isFetching, setIsFetching] = useState(false)
  const [activeTab, setActiveTab] = useState('instructions')
  const { recipeId } = useParams()

  const getRecipeInfo = async (recipeId) => {
    try {
      setIsFetching(true)
      const recipe = await fetchRecipeInfo(recipeId)
      setRecipe(recipe)
      setIsFetching(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getRecipeInfo(recipeId)
  }, [recipeId])
  return (
    <>
      {!isFetching ? (
        <DetailsWrapper>
          <ImageContainer>
            <h2>{recipe?.title}</h2>
            <img src={recipe?.image ? recipe?.image : noImage} alt='' />
          </ImageContainer>
          <Info>
            <ButtonContainer>
              <Button
                className={`${activeTab === 'instructions' && 'active'}`}
                onClick={() => setActiveTab('instructions')}
              >
                Instructions
              </Button>
              <Button
                className={`${activeTab === 'ingredients' && 'active'}`}
                onClick={() => setActiveTab('ingredients')}
              >
                Ingredients
              </Button>
            </ButtonContainer>
            {activeTab === 'instructions' && (
              <>
                <Title>Summary</Title>
                <Details
                  dangerouslySetInnerHTML={{ __html: recipe?.summary }}
                ></Details>
                <Title>Instructions</Title>
                <Details
                  type={true}
                  dangerouslySetInnerHTML={{ __html: recipe?.instructions }}
                ></Details>
              </>
            )}

            {activeTab === 'ingredients' && (
              <ul>
                {recipe?.extendedIngredients?.map((ingredient) => {
                  return <li key={ingredient.id}>{ingredient.original}</li>
                })}
              </ul>
            )}
          </Info>
        </DetailsWrapper>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default RecipePage
