import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { Button, Card, BlockLink, Arrow } from 'rebass'

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

  render() {
    return (
      <>
        <MenuButton
          onClick={this.handleLoginDropdown}
          isOpen={this.state.isOpen}
        >
          menu
          <Arrow direction="down" />
        </MenuButton>
        {this.state.isOpen && (
          <MenuDropdown elevation={4}>
            <MenuLink href="/login">Login</MenuLink>
            <MenuLink href="/contact">Contact</MenuLink>
          </MenuDropdown>
        )}
      </>
    )
  }
}

export default Menu

const MenuButton = styled(Button)`
  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: transparent;
      color: blue;
    `};

  ${Arrow} {
    margin-left: 10px;
  }
`

const MenuLink = styled(BlockLink)`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  padding: 10px;
  color: black;

  &:hover {
    background-color: teal;
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
