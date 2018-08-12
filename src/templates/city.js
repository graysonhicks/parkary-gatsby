import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Results from '../components/results'
import styled from 'styled-components'

import { ResultsContext } from '../components/context'

class CityPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ResultsLayout currentPage="results">
        <ResultsContext.Provider
          value={{
            view: 'grid',
            parks: this.props.data.allContentfulPark.edges,
            cityState: this.props.pageContext.cityState,
          }}
        >
          <Results />
        </ResultsContext.Provider>
      </ResultsLayout>
    )
  }
}

export default CityPage

const ResultsLayout = styled(Layout)`
  height: auto;
  min-height: 100vh;
  overflow: scroll;
`

export const cityQuery = graphql`
  query($cityState: String!) {
    allContentfulPark(filter: { fields: { cityState: { eq: $cityState } } }) {
      edges {
        node {
          ...ParkInfo
        }
      }
    }
  }
`
