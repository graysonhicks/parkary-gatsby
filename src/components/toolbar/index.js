import React, { Component } from 'react'
import styled from 'styled-components'

import { push } from 'gatsby-link'

import { StaticQuery, graphql } from 'gatsby'

import { Container, Group } from 'rebass'

import Toggle from './toggle'
import BackButton from './backbutton'
import FilterMenu from './filter'
import { ResultsContext } from './../context'

class Toolbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedAmenities: props.selectedAmenities ? props.selectedAmenities : [],
    }
  }

  toggleToMap = () => {
    push({
      pathname: '/north-carolina/brevard/map',
      state: {
        selectedAmenities: this.props.selectedAmenities,
      },
    })
  }

  toggleToGrid = () => {
    push({
      pathname: '/north-carolina/brevard/',
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
              <BackButton />
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
