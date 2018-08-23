import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

import { Button, Card, BlockLink, Arrow } from 'rebass'
import LogoutButton from '../logout/link'
import { LoginButton } from '../login/link'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleLoginDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  closeMenu = () => {
    console.log('gi')

    this.setState({
      isOpen: false,
    })
  }

  render() {
    const { isLoggedIn } = this.props
    return (
      <>
        {this.state.isOpen ? (
          <MenuButton onClick={this.handleLoginDropdown} open>
            menu
            <Arrow direction="down" />
          </MenuButton>
        ) : (
          <MenuButton onClick={this.handleLoginDropdown}>
            menu
            <Arrow direction="down" />
          </MenuButton>
        )}

        {this.state.isOpen && (
          <MenuDropdown onClick={this.closeMenu}>
            {/* <MenuLink to="/contact" onClick={this.closeMenu}>
              Contact
            </MenuLink> */}
            {isLoggedIn && <LogoutButton />}
            {!isLoggedIn && <LoginButton />}
          </MenuDropdown>
        )}
      </>
    )
  }
}

export default Menu

const MenuButton = styled(Button)`
  ${({ open }) =>
    open &&
    css`
      background-color: transparent;
      color: blue;
    `};

  ${Arrow} {
    margin-left: 10px;
  }
`

const MenuLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  padding: 10px;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 128, 128, 0.5);
  }
`

const MenuDropdown = styled(Card)`
  position: absolute;
  padding: 0;
  top: 40px;
  background-color: white;
  width: 250px;
  z-index: 2;
`
