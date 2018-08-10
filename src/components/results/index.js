import React, { Component } from 'react'

import styled from 'styled-components'
import { Container } from 'rebass'

import ParkCard from './card'

class Results extends Component {
  render() {
    return (
      <ResultsContainer>
        {this.props.parks.map(({ node }) => {
          return <ParkCard key={node.title} park={node} />
        })}
      </ResultsContainer>
    )
  }
}

export default Results

const ResultsContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
  padding: 10px;
  width: 90%;
`
