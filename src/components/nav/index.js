import React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'
import { Toolbar, Container } from 'rebass'
import Brand from './../brand'
import CurrentPage from './current-page'
import Menu from './menu'

const Nav = ({ logo }) => {
  return (
    <StyledNav>
      <NavHomeLink to="/">
        <Brand logo={logo} dark />
      </NavHomeLink>
      <CurrentPage />
      <RightContainer>
        <Menu />
      </RightContainer>
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled(Toolbar)`
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: white;
  height: 50px;
  position: absolute;
  top: 0;
  width: 100%;
`

const NavHomeLink = styled(Link)`
  display: flex;
  text-decoration: none;
`

const RightContainer = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-right: 0;
  padding-right: 15px;
  position: relative;
`
