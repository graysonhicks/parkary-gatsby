import React, { Component } from 'react'

import styled from 'styled-components'
import { Container } from 'rebass'

import ParkCard from './card'
import Toolbar from './../toolbar'
import MainMap from '../map'

import { ResultsContext } from './../context'
class Results extends Component {
  render() {
    return (
      <ResultsContext.Consumer>
        {({ view, parks, selectedAmenities }) => {
          return (
            <ResultsContainer>
              <Toolbar selectedAmenities={selectedAmenities} />
              {view === 'grid' && (
                <CardContainer>
                  {parks.map(({ node }) => {
                    return <ParkCard key={node.title} park={node} />
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
