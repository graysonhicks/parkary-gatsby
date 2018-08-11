import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Results from '../components/results'
import styled from 'styled-components'

import { ResultsContext } from '../components/context'

class CityPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grid: false,
      map: true,
      filtering: false,
      parks: props.data.allContentfulPark.edges,
    }
  }

  filterByAmenity = amenity => {
    const orig = this.state.parks
  }

  render() {
    return (
      <ResultsLayout currentPage="results">
        <ResultsContext.Provider
          value={{
            view: { grid: this.state.grid, map: this.state.map },
            parks: this.state.parks,
            filtering: this.filtering,
            filterByAmenity: this.filterByAmenity,
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
          id
          title
          description {
            description
          }
          location {
            lat
            lng: lon
          }
          featuredImage {
            fluid(maxWidth: 250, maxHeight: 200) {
              ...GatsbyContentfulFluid
            }
          }
          rating
          fields {
            slug
            cityState
          }
        }
      }
    }
  }
`
