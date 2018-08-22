import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Results from '../components/results'

import { ResultsContext } from '../components/context'

class MapPage extends Component {
  render() {
    const { pageContext, data } = this.props

    return (
      <>
        <ResultsContext.Provider
          value={{
            view: pageContext.view,
            cityState: pageContext.cityState,
          }}
        >
          <Results parks={data.allContentfulPark.edges} />
        </ResultsContext.Provider>
      </>
    )
  }
}

export default MapPage

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
