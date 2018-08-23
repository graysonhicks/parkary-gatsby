import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { Text } from 'rebass'

const ForgotPasswordLink = () => {
  return (
    <ForgotPasswordFormText>
      Forgot password? <Link to={`/forgot-password`}>Click here.</Link>
    </ForgotPasswordFormText>
  )
}

export default ForgotPasswordLink

const ForgotPasswordFormText = styled(Text)`
  margin-bottom: 7.5px;
  font-size: 12px;
`
