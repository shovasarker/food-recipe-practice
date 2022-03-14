import React from 'react'
import { Card, Grid } from './custom-grid.styles.js'
import noImage from '../../images/no_image.jpg'

const CustomGrid = ({ recipes }) => {
  return (
    <Grid>
      {recipes?.map(({ id, image, title }) => {
        return (
          <Card key={id}>
            <img src={image ? image : noImage} alt={title} />
            <h4>{title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

export default CustomGrid
