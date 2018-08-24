import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { auth } from '../../firebase'

import { Button } from 'rebass'

const LogoutButton = () => (
  <StyledLogoutButton
    type="button"
    onClick={() => {
      auth.doSignOut().then(() => navigate(`/`))
    }}
  >
    Sign Out
  </StyledLogoutButton>
)

export default LogoutButton

const StyledLogoutButton = styled(Button)`
  margin: 7.5px;
`
