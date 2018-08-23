import React from 'react'
import styled, { withComponent } from 'styled-components'
import Link from 'gatsby-link'
import { auth } from '../../firebase'
import { Text, Button } from 'rebass'

export const LoginButton = () => (
  <LoginButtonWrapper>
    <StyledLoginLink to="/login">Login</StyledLoginLink>
  </LoginButtonWrapper>
)

const LoginLink = () => {
  return (
    <LoginFormText>
      Already have an account? <Link to={`/login`}>Login!</Link>
    </LoginFormText>
  )
}

export default LoginLink

const LoginFormText = styled(Text)`
  margin-bottom: 7.5px;
  font-size: 12px;
`
const StyledLoginLink = styled(Link)`
  margin: 7.5px;
  color: white;
  text-decoration: none;
`

const LoginButtonWrapper = styled(Button)`
  margin: 7.5px;
`
