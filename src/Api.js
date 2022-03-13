const baseUrl = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=`

export const getFetchUrl = (tag, number) => {
  return `${baseUrl}${number}${tag ? '&tags=' + tag : ''}`
}

export const fetchRecipes = async (tag = '', number = 9) => {
  const fetchUrl = getFetchUrl(tag, number)
  const res = await fetch(fetchUrl)
  const data = await res.json()
  return data.recipes
}
