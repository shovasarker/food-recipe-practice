import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  column-gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`

export const Card = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    font-size: 14px;
    text-align: center;
    padding: 1rem;
  }
`
