import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PageContextWrapper from '../components/pagewrapper'
import Results from '../components/results'

import { ResultsContext } from '../components/context'

class ResultsPage extends Component {
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
          <PageContextWrapper page={pageContext.view}>
            <Results parks={data.allContentfulPark.edges} />
          </PageContextWrapper>
        </ResultsContext.Provider>
      </>
    )
  }
}

export default ResultsPage

export const cityQuery = graphql`
  query($cityState: String!) {
    allContentfulPark(filter: { fields: { cityState: { eq: $cityState } } }) {
      edges {
        node {
          ...ParkInfo
        }
      }
    }
    site {
      ...SiteInfo
    }
  }
`
