import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { Text } from 'rebass'

const LoginLink = () => {
  return (
    <LoginFormText>
      Already have an account? <Link to={`/forgot-password`}>Login!</Link>
    </LoginFormText>
  )
}

export default LoginLink

const LoginFormText = styled(Text)`
  margin-bottom: 7.5px;
  font-size: 12px;
`
