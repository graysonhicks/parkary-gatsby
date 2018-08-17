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
          <MenuDropdown>
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

const MenuLink = styled(BlockLink)`
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
