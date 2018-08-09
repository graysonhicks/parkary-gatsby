import React, { Component } from 'react'

import styled from 'styled-components'
import { Pane, Card, Text } from 'evergreen-ui'

class Results extends Component {
  render() {
    return (
      <ResultsContainer>
        {this.props.parks.map(({ node }) => {
          return (
            <Result key={node.title} elevation={4}>
              <Text>Title-</Text>
              <Text>{node.title}</Text>
              <Text>Location -</Text>
              <Text>lat: {node.location.lat}</Text>
              <Text>lon: {node.location.lon}</Text>
            </Result>
          )
        })}
      </ResultsContainer>
    )
  }
}

export default Results

const ResultsContainer = styled(Card)`
  display: flex;
  background-color: white;
  padding: 10px;
  height: 80vh;
  width: 80%;
`
const Result = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 25%;
  margin-left: 10px;
`
