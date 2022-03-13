import React, { useEffect, useState } from 'react'

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
    <div>
      {popular?.map(({ title, id }) => {
        return <h2 key={id}>{title}</h2>
      })}
    </div>
  )
}

export default Popular
