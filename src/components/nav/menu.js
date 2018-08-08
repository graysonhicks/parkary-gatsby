import React, { Component } from 'react'
import styled from 'styled-components'

import { Button, Card, Text, colors } from 'evergreen-ui'

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
          Menu
        </MenuButton>
        {this.state.isOpen && (
          <MenuDropdown elevation={4}>
            <MenuLink href="/login">
              <Text>Login</Text>
            </MenuLink>
            <MenuLink href="/contact">
              <Text>Contact</Text>
            </MenuLink>
          </MenuDropdown>
        )}
      </>
    )
  }
}

export default Menu

const MenuButton = styled(Button)``

const MenuLink = styled.a`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  padding: 10px;

  &:hover {
    background-color: ${colors.neutral['30A']};
  }
`

const MenuDropdown = styled(Card)`
  position: absolute;
  top: 40px;
  background-color: ${colors.white['500']};
  width: 250px;
`
