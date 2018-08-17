import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { MdSort } from 'react-icons/md'
import { Button, Arrow, Card, Container, BlockLink } from 'rebass'

class SortMenu extends Component {
  render() {
    const { sort, handleClickSort, sortOpen, handleSortDropdown } = this.props
    const sortActive = {}
    if (sort) {
      sortActive.active = 1
    } else {
      sortActive.active = 0
    }

    return (
      <>
        <SortButton onClick={handleSortDropdown} {...sortActive}>
          <StyledSortIcon />
          Sort <StyledArrow direction="down" />
        </SortButton>
        {sortOpen && (
          <SortDropdownContainer>
            <SortDropdown>
              <FilterLink
                onClick={() => {
                  handleClickSort('distance')
                }}
                type="distance"
                sort={sort}
              >
                Distance
              </FilterLink>
              <FilterLink
                onClick={() => {
                  handleClickSort('rating-desc')
                }}
                type="rating-desc"
                sort={sort}
              >
                Rating (desc)
                <Arrow direction="down" />
              </FilterLink>
              <FilterLink
                onClick={() => {
                  handleClickSort('rating-asc')
                }}
                type="rating-asc"
                sort={sort}
              >
                Rating (asc)
                <Arrow direction="up" />
              </FilterLink>
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
    box-shadow: 0 0 10px 2px #0067ee;
  }

  ${({ active }) =>
    active === 1 &&
    css`
      background-color: blue;
      box-shadow: 0 0 10px 2px #0067ee;
    `};
`

const StyledSortIcon = styled(MdSort)`
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
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  color: black;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 128, 128, 0.5);
  }

  ${({ sort, type }) => {
    return (
      sort === type &&
      css`
        background-color: rgba(0, 128, 128, 0.3);
      `
    )
  }};
`
