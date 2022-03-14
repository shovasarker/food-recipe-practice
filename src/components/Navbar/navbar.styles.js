import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Lobster Two', cursive;
  svg {
    font-size: 1.8rem;
    margin-right: 0.5rem;
  }
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`
