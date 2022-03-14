import React from 'react'
import { Card, Gradient, Title, Wrapper } from './card-container.styles.js'
import noImage from '../../images/no_image.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const CardContainer = ({ recipes, title, perPage }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Splide
        options={{
          perPage: perPage > 3 ? perPage - 3 : 1,
          mediaQuery: 'min',
          breakpoints: {
            768: {
              perPage: perPage > 3 ? perPage - 2 : 2,
              drag: 'free',
            },
            1024: {
              perPage: perPage > 3 ? perPage - 1 : 3,
            },
            1280: {
              perPage: perPage,
            },
          },
          gap: '1rem',
          arrows: false,
          pagination: false,
        }}
      >
        {recipes?.map(({ id, title, image }) => {
          return (
            <SplideSlide key={id}>
              <Card>
                <p>{title}</p>
                <img src={image ? image : noImage} alt={title} />
                <Gradient />
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>
  )
}

export default CardContainer
