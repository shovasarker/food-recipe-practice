import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`
export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transform: scale(0.8);

  svg {
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`
