import React, { Component } from 'react'
import { push } from 'gatsby-link'
import styled from 'styled-components'
import { Container } from 'rebass'

import ParkCard from './card'
import Toolbar from './../toolbar'
import MainMap from '../map'

import { ResultsContext } from './../context'
class Results extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ResultsContext.Consumer>
        {({
          view,
          parks,
          selectedAmenities,
          handleClickFilter,
          handleParkClick,
          cityState,
        }) => {
          return (
            <ResultsContainer>
              <Toolbar
                selectedAmenities={selectedAmenities}
                handleClickFilter={handleClickFilter}
                cityState={cityState}
              />
              {view === 'grid' && (
                <CardContainer>
                  {parks.map(({ node }) => {
                    let hasAllFilteredAmenities = true
                    selectedAmenities.map(amenity => {
                      if (!node.amenities[amenity]) {
                        hasAllFilteredAmenities = false
                      }
                    })

                    if (hasAllFilteredAmenities) {
                      return (
                        <ParkCard
                          key={node.title}
                          park={node}
                          selectedAmenities={selectedAmenities}
                          handleParkClick={handleParkClick}
                        />
                      )
                    }
                  })}
                </CardContainer>
              )}
              {view === 'map' && <MainMap />}
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
