import React from 'react'
import styled from 'styled-components'

import { Button } from 'rebass'
import Link from 'gatsby-link'

const BackButton = () => {
  return (
    <Back>
      <StyledLink to="/">Search</StyledLink>
    </Back>
  )
}

export default BackButton

const Back = styled(Button)`
  background-color: blue;
  border: 2px solid blue;
  box-shadow: 0 0 10px 2px lightgreen;
  margin-right: 10px;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
