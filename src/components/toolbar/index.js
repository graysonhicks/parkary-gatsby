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

  handleClickFilter = name => {
    // If filter already on, turn it off.  Otherwise, add to.
    if (this.state.selectedAmenities.includes(name)) {
      this.setState(prevState => {
        let selectedAmenitiesMinusClicked = [...prevState.selectedAmenities]
        const index = selectedAmenitiesMinusClicked.indexOf(name)
        selectedAmenitiesMinusClicked.splice(index, 1)

        return {
          selectedAmenities: selectedAmenitiesMinusClicked,
        }
      })
    } else {
      this.setState(prevState => ({
        selectedAmenities: [...prevState.selectedAmenities, name],
      }))
    }
  }

  toggleToMap = () => {
    push({
      pathname: '/north-carolina/brevard/map',
      state: {
        selectedAmenities: this.state.selectedAmenities,
      },
    })
  }

  toggleToGrid = () => {
    push({
      pathname: '/north-carolina/brevard/',
      state: {
        selectedAmenities: this.state.selectedAmenities,
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
                selectedAmenities={this.state.selectedAmenities}
                handleClickFilter={this.handleClickFilter}
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
