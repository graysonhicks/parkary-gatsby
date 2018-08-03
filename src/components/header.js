import React from 'react'
import styled from 'styled-components'

import { Pane, colors } from 'evergreen-ui'

import Brand from './brand'
import CurrentPage from './current-page'

const Header = () => (
  <Nav>
    <Brand />
    <CurrentPage />
  </Nav>
)

export default Header

const Nav = styled(Pane)`
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: ${colors.neutral[400]};
  height: 50px;
  position: absolute;
  top: 0;
  width: 100%;
`
