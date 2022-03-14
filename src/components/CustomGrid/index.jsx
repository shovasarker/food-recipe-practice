import React from 'react'
import { Card, Grid } from './custom-grid.styles.js'
import noImage from '../../images/no_image.jpg'
import { Link } from 'react-router-dom'

const CustomGrid = ({ recipes }) => {
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {recipes?.map(({ id, image, title }) => {
        return (
          <Card key={id}>
            <Link to={`/recipe/${id}`}>
              <img src={image ? image : noImage} alt={title} />
              <h4>{title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

export default CustomGrid
