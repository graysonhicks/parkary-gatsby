import React, { Component } from 'react'
import styled from 'styled-components'

import { navigate } from 'gatsby'

import { StaticQuery, graphql } from 'gatsby'

import { Container, Group } from 'rebass'

import Toggle from './toggle'
import BackButton from './backbutton'
import FilterMenu from './filter'
import SortMenu from './sort'

class Toolbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedAmenities: props.selectedAmenities ? props.selectedAmenities : [],
      filterOpen: false,
      sortOpen: false,
    }
  }

  toggleToMap = () => {
    // Passing selected filters back and forth between toggles.
    // Otherwise new Gatsby page would have fresh start.
    navigate(`/${this.props.cityState}/map/`)
  }

  toggleToGrid = () => {
    // Passing selected filters back and forth between toggles.
    // Otherwise new Gatsby page would have fresh start.
    navigate(`/${this.props.cityState}/`)
  }

  handleFilterDropdown = () => {
    this.setState({
      filterOpen: !this.state.filterOpen,
      sortOpen: false,
    })
  }

  handleSortDropdown = () => {
    this.setState({
      sortOpen: !this.state.sortOpen,
      filterOpen: false,
    })
  }

  render() {
    const {
      sort,
      selectedAmenities,
      handleClickFilter,
      handleClickSort,
    } = this.props
    return (
      <StaticQuery
        query={graphql`
          query {
            allContentfulPark(limit: 1) {
              edges {
                node {
                  ...Amenities
                }
              }
            }
          }
        `}
        render={({
          allContentfulPark: {
            edges: [
              {
                node: { amenities },
              },
            ],
          },
        }) => {
          return (
            <ToolbarContainer>
              <BackButton text="Search" />
              <Group>
                <Toggle
                  toggleToGrid={this.toggleToGrid}
                  toggleToMap={this.toggleToMap}
                />
              </Group>
              <FilterMenu
                amenities={amenities}
                selectedAmenities={selectedAmenities}
                handleClickFilter={handleClickFilter}
                handleFilterDropdown={this.handleFilterDropdown}
                filterOpen={this.state.filterOpen}
              />
              <SortMenu
                sort={sort}
                handleClickSort={handleClickSort}
                handleSortDropdown={this.handleSortDropdown}
                sortOpen={this.state.sortOpen}
              />
            </ToolbarContainer>
          )
        }}
      />
    )
  }
}

export default Toolbar

export const ParkCardToolbar = ({ slug }) => {
  return (
    <ToolbarContainer>
      <BackButton text="City" slug={slug} />
    </ToolbarContainer>
  )
}

const ToolbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  max-width: unset;
  background-color: white;
  margin: 0;
  background-color: lightgray;
`
