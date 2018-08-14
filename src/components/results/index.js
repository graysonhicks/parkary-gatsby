import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from 'rebass'
import { navigate } from 'gatsby'
import ParkCard from './card'
import Toolbar from './../toolbar'
import MainMap from '../map'

import { ResultsContext } from './../context'
class Results extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedAmenities: sessionStorage.getItem('selectedAmenities')
        ? JSON.parse(sessionStorage.getItem('selectedAmenities'))
        : [],
    }
  }

  handleParkClick = (slug, selectedAmenities) => {
    navigate(`/${slug}`, {
      state: {
        selectedAmenities: this.state.selectedAmenities,
      },
    })
  }

  handleClickFilter = name => {
    // If filter already on, turn it off.  Otherwise, add to.
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
                      return (
                        <ParkCard
                          key={node.title}
                          park={node}
                          selectedAmenities={this.state.selectedAmenities}
                          handleParkClick={this.handleParkClick}
                        />
                      )
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
