const baseUrl = `https://api.spoonacular.com/recipes/`
const apiKeyPart = `?apiKey=${process.env.REACT_APP_API_KEY}&number=`

export const getFetchUrl = (searchType, key, value, number) => {
  return `${baseUrl}${searchType}${apiKeyPart}${number}${
    key ? `&${key}=${value}` : ''
  }`
}

export const fetchRecipes = async (
  searchType = 'random',
  key = '',
  value = '',
  number = 9
) => {
  const fetchUrl = getFetchUrl(searchType, key, value, number)
  const res = await fetch(fetchUrl)
  const data = await res.json()
  return data
}
