import React from 'react'
import styled from 'styled-components'

import { Pane, Text, colors } from 'evergreen-ui'

const Header = ({ siteTitle }) => (
  <Nav>
    <Brand>parkary</Brand>
  </Nav>
)

export default Header

const Nav = styled(Pane)`
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: ${colors.neutral[500]};
  height: 50px;
  position: absolute;
  top: 0;
  width: 100%;
`

const Brand = styled(Text)`
  color: ${colors.white[500]};
  font-family: 'Roboto Black';
`
