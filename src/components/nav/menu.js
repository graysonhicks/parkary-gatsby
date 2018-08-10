import React, { Component } from 'react'
import styled from 'styled-components'

import { NavLink, Card, BlockLink } from 'rebass'

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
          iconAfter="triangle"
          iconAfterAim="down"
          appearance="ghost"
          height={36}
          onClick={this.handleLoginDropdown}
        >
          menu
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

const MenuButton = styled(NavLink)`
  color: black;
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
`
