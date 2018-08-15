import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { MdFilterList } from 'react-icons/md'
import { Button, Arrow, Card, Container } from 'rebass'

import FilterCheckbox from './filtercheckbox'

class FilterMenu extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleFilterDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const isActive = {}
    if (this.props.selectedAmenities.length) {
      isActive.active = 1
    } else {
      isActive.active = 0
    }

    console.log(isActive)

    return (
      <>
        <FilterButton onClick={this.handleFilterDropdown} {...isActive}>
          <StyledFilterIcon />
          Filter <StyledArrow direction="down" />
        </FilterButton>
        {this.state.isOpen && (
          <FilterDropdownContainer>
            <FilterDropdown>
              {Object.keys(this.props.amenities).map(amenity => (
                <FilterCheckbox
                  key={amenity}
                  name={amenity}
                  selectedAmenities={this.props.selectedAmenities}
                  value={this.props.amenities[amenity]}
                  handleClickFilter={this.props.handleClickFilter}
                />
              ))}
            </FilterDropdown>
          </FilterDropdownContainer>
        )}
      </>
    )
  }
}

export default FilterMenu

const FilterButton = styled(Button)`
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

const StyledFilterIcon = styled(MdFilterList)`
  margin-right: 10px;
`

const StyledArrow = styled(Arrow)`
  margin-left: 10px;
`

const FilterDropdownContainer = styled(Container)`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  top: 100px;
  left: -100px;
`

const FilterDropdown = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 500px;
  padding: 10px;
  background-color: white;
  z-index: 2;
`
