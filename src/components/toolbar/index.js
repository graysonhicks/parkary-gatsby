import React, { Component } from 'react'
import styled from 'styled-components'

import { navigate } from 'gatsby'

import { StaticQuery, graphql } from 'gatsby'

import { Container, Group } from 'rebass'

import Toggle from './toggle'
import BackButton from './backbutton'
import FilterMenu from './filter'

class Toolbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedAmenities: props.selectedAmenities ? props.selectedAmenities : [],
    }
  }

  toggleToMap = () => {
    navigate(`/${this.props.cityState}/map/`, {
      state: {
        selectedAmenities: this.props.selectedAmenities,
      },
    })
  }

  toggleToGrid = () => {
    navigate(`/${this.props.cityState}/`, {
      state: {
        selectedAmenities: this.props.selectedAmenities,
      },
    })
  }

  render() {
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
                selectedAmenities={this.props.selectedAmenities}
                handleClickFilter={this.props.handleClickFilter}
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
