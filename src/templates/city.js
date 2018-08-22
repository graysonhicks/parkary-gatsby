import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Results from '../components/results'

import { ResultsContext } from '../components/context'

class CityPage extends Component {
  render() {
    const { pageContext, data } = this.props

    return (
      <>
        <ResultsContext.Provider
          value={{
            view: 'grid',
            cityState: pageContext.cityState,
          }}
        >
          <Results parks={data.allContentfulPark.edges} />
        </ResultsContext.Provider>
      </>
    )
  }
}

export default CityPage

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
