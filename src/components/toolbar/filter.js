import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { MdFilterList } from 'react-icons/md'
import { Button, Arrow, Card, Container } from 'rebass'

import FilterCheckbox from './filtercheckbox'

class FilterMenu extends Component {
  render() {
    const {
      filterOpen,
      amenities,
      selectedAmenities,
      handleClickFilter,
      handleFilterDropdown,
    } = this.props

    const isActive = {}
    if (selectedAmenities.length) {
      isActive.active = 1
    } else {
      isActive.active = 0
    }

    return (
      // What to do about search with no results:
      // (preferred) Can use StaticQuery to have all page routes here to determine if result
      // address is in that array.
      // Or pass location state to the 404 page and tell if coming from search.
      <>
        <FilterButton onClick={handleFilterDropdown} {...isActive}>
          <StyledFilterIcon />
          Filter <StyledArrow direction="down" />
        </FilterButton>
        {filterOpen && (
          <FilterDropdownContainer>
            <FilterDropdown>
              {Object.keys(amenities).map(amenity => (
                <FilterCheckbox
                  key={amenity}
                  name={amenity}
                  selectedAmenities={selectedAmenities}
                  value={amenities[amenity]}
                  handleClickFilter={handleClickFilter}
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
    box-shadow: 0 0 10px 2px #0067ee;
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
