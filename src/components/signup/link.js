import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { Text } from 'rebass'

const SignUp = () => {
  return (
    <SignUpFormText>
      Don't have an account? <Link to={`/sign-up`}>Sign Up!</Link>
    </SignUpFormText>
  )
}

export default SignUp

const SignUpFormText = styled(Text)`
  margin-bottom: 7.5px;
  font-size: 12px;
`
