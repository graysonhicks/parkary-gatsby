import React from 'react'
import styled from 'styled-components'

import { MdKeyboardBackspace } from 'react-icons/md'
import { Button } from 'rebass'
import Link from 'gatsby-link'

const BackButton = ({ slug, text }) => {
  return (
    <Back>
      <StyledLink to={`${slug ? slug : '/'}`}>
        <StyledIcon />
        {text}
      </StyledLink>
    </Back>
  )
}

export default BackButton

const Back = styled(Button)`
  margin-right: 10px;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
`

const StyledIcon = styled(MdKeyboardBackspace)`
  margin-right: 10px;
`
