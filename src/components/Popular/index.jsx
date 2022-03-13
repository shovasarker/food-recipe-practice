import React, { useEffect, useState } from 'react'
import { Card, Gradient, Title, Wrapper } from './popular.styled'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const Popular = () => {
  const [popular, setPopular] = useState([])

  const getPopular = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    )
    const data = await res.json()
    setPopular(data.recipes)
  }

  useEffect(() => {
    getPopular()
  }, [])

  return (
    <Wrapper>
      <Title>Popular Recipes</Title>
      <Splide
        options={{
          perPage: 4,
          gap: '1rem',
          arrows: false,
          pagination: false,
          drag: 'free',
        }}
      >
        {popular?.map(({ id, title, image }) => {
          return (
            <SplideSlide key={id}>
              <Card>
                <p>{title}</p>
                <img src={image} alt={title} />
                <Gradient />
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>
  )
}

export default Popular
