import React from 'react'
import styled from 'styled-components'

import { Pane, colors } from 'evergreen-ui'

import Brand from './../brand'
import CurrentPage from './current-page'
import Menu from './menu'

const Nav = () => (
  <StyledNav appearance="tint2" elevation={4}>
    <Brand dark />
    <CurrentPage />
    <RightContainer>
      <Menu />
    </RightContainer>
  </StyledNav>
)

export default Nav

const StyledNav = styled(Pane)`
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: ${colors.white['500']};
  height: 50px;
  position: absolute;
  top: 0;
  width: 100%;
`

const RightContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 15px;
  position: relative;
`
