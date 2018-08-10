import React, { Component } from 'react'

import styled from 'styled-components'
import { Container } from 'rebass'

import ParkCard from './card'
import Toolbar from './toolbar'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = { grid: true, map: false }

    this.changeView = this.changeView.bind(this)
  }

  changeView = () => {
    this.setState({
      grid: !this.state.grid,
      map: !this.state.map,
    })
  }

  render() {
    return (
      <ResultsContainer>
        <Toolbar view={this.state} changeView={this.changeView} />
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
  padding: 10px;
  width: 100%;
  max-width: unset;
`
