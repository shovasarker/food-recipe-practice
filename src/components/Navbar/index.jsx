import React from 'react'
import { Logo, Nav } from './navbar.styles'
import { GiKnifeFork } from 'react-icons/gi'

const Navbar = () => {
  return (
    <Nav>
      <Logo to={'/'}>
        <GiKnifeFork />
        Food Recipes
      </Logo>
    </Nav>
  )
}

export default Navbar
