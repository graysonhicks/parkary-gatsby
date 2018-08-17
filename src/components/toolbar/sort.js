import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { MdFilterList } from 'react-icons/md'
import { Button, Arrow, Card, Container, BlockLink } from 'rebass'

import SortCheckbox from './filtercheckbox'

class SortMenu extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleSortDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const isActive = {}
    // if (this.props.selectedAmenities.length) {
    //   isActive.active = 1
    // } else {
    //   isActive.active = 0
    // }

    return (
      <>
        <SortButton onClick={this.handleSortDropdown} {...isActive}>
          <StyledSortIcon />
          Sort <StyledArrow direction="down" />
        </SortButton>
        {this.state.isOpen && (
          <SortDropdownContainer>
            <SortDropdown>
              <FilterLink>Distance</FilterLink>
              <FilterLink>Rating</FilterLink>
            </SortDropdown>
          </SortDropdownContainer>
        )}
      </>
    )
  }
}

export default SortMenu

const SortButton = styled(Button)`
  display: flex;
  align-items: center;
  color: white;
  margin-left: 10px;
  background-color: gray;

  &:focus,
  &:active {
    box-shadow: none;
  }

  ${({ active }) =>
    active === 1 &&
    css`
      background-color: blue;
      box-shadow: 0 0 10px 2px #0067ee;
    `};
`

const StyledSortIcon = styled(MdFilterList)`
  margin-right: 10px;
`

const StyledArrow = styled(Arrow)`
  margin-left: 10px;
`

const SortDropdownContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100%;
`

const SortDropdown = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 25px;
  left: -150px;
  padding: 10px;
  background-color: white;
  z-index: 2;
  width: 250px;
  padding: 0;
`

const FilterLink = styled(BlockLink)`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  padding: 10px;
  color: black;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 128, 128, 0.5);
  }
`
