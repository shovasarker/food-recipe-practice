import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'

import React from 'react'
import { List, SLink } from './category.styles'

const Category = () => {
  return (
    <List>
      <SLink to={'/cuisine/Italian'} title='Italian'>
        <FaPizzaSlice />
      </SLink>
      <SLink to={'/cuisine/American'} title='American'>
        <FaHamburger />
      </SLink>
      <SLink to={'/cuisine/Thai'} title='Thai'>
        <GiNoodles />
      </SLink>
      <SLink to={'/cuisine/Japanese'} title='Japanese'>
        <GiChopsticks />
      </SLink>
    </List>
  )
}

export default Category
