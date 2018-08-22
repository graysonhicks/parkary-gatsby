import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Results from '../components/results'
import styled from 'styled-components'

import { ResultsContext } from '../components/context'

class MapPage extends Component {
  render() {
    const { pageContext, data, location } = this.props

    return (
      <>
        <ResultsContext.Provider
          value={{
            view: pageContext.view,
            cityState: pageContext.cityState,
          }}
        >
          <Results
            parks={data.allContentfulPark.edges}
          />
        </ResultsContext.Provider>
      </>
    )
  }
}

export default MapPage

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
