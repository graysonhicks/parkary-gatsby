import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Results from '../components/results'
import styled from 'styled-components'

import { ResultsContext } from '../components/context'

class CityPage extends Component {
  render() {
    const { pageContext, data, location } = this.props

    return (
      <ResultsLayout currentPage="results">
        <ResultsContext.Provider
          value={{
            view: 'grid',
            cityState: pageContext.cityState,
          }}
        >
          <Results
            parks={
              location.state && location.state.parks
                ? location.state.parks
                : data.allContentfulPark.edges
            }
          />
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
