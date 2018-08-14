import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from 'rebass'
import { navigate } from 'gatsby'
import ParkCard from './card'
import Toolbar from './../toolbar'
import MainMap from '../map'

import { ResultsContext } from './../context'

// Templating each cities parks as a grid and map page in Gatsby
// means I cannot have a top level component storing a shared state.
// In order to have filters persist across Gatsby pages,
// we must use some kind of data storage.
// The Router offers a state {} object on its location property,
// which seems to work between the grid and map pages,
// but when they are clicked away from (like to an individual park)
// the location state object is lost.  I think this may be a bug with
// the Gatsby/React router based on some issues I found https://github.com/gatsbyjs/gatsby/issues/7174
// but for now using sessionStorage.
// The sessionStorage is updated everytime a filter is added or removed.
// It is cleared when a new search is inputted, and follows normal
// sessionStorage behaviors.
class Results extends Component {
  constructor(props) {
    super(props)

    // Check if any filters are stored in sessionStorage.
    this.state = {
      selectedAmenities: sessionStorage.getItem('selectedAmenities')
        ? JSON.parse(sessionStorage.getItem('selectedAmenities'))
        : [],
    }
  }

  handleClickFilter = name => {
    // If filter already on, turn it off.  Otherwise, add to
    // state.
    // Either way, update session storage.
    if (this.state.selectedAmenities.includes(name)) {
      this.setState(prevState => {
        let selectedAmenitiesMinusClicked = [...prevState.selectedAmenities]
        const index = selectedAmenitiesMinusClicked.indexOf(name)
        selectedAmenitiesMinusClicked.splice(index, 1)
        sessionStorage.setItem(
          'selectedAmenities',
          JSON.stringify(selectedAmenitiesMinusClicked)
        )
        return {
          selectedAmenities: selectedAmenitiesMinusClicked,
        }
      })
    } else {
      this.setState(prevState => {
        sessionStorage.setItem(
          'selectedAmenities',
          JSON.stringify([...prevState.selectedAmenities, name])
        )
        return {
          selectedAmenities: [...prevState.selectedAmenities, name],
        }
      })
    }
  }
  render() {
    return (
      <ResultsContext.Consumer>
        {({ view, parks, cityState }) => {
          return (
            <ResultsContainer>
              <Toolbar
                selectedAmenities={this.state.selectedAmenities}
                handleClickFilter={this.handleClickFilter}
                cityState={cityState}
              />
              {view === 'grid' && (
                <CardContainer>
                  {parks.map(({ node }) => {
                    let hasAllFilteredAmenities = true
                    this.state.selectedAmenities.map(amenity => {
                      if (!node.amenities[amenity]) {
                        hasAllFilteredAmenities = false
                      }
                    })

                    if (hasAllFilteredAmenities) {
                      return <ParkCard key={node.title} park={node} />
                    }
                  })}
                </CardContainer>
              )}
              {view === 'map' && (
                <MainMap selectedAmenities={this.state.selectedAmenities} />
              )}
            </ResultsContainer>
          )
        }}
      </ResultsContext.Consumer>
    )
  }
}

export default Results

const ResultsContainer = styled(Container)`
  padding: 0;
  width: 100%;
  max-width: unset;
  display: flex;
  flex-wrap: wrap;
`

const CardContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  max-width: unset;
`
