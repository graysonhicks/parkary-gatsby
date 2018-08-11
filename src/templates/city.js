import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Results from '../components/results'
import styled from 'styled-components'

import { ResultsContext } from '../components/context'

class CityPage extends Component {
  constructor(props) {
    super(props)
    console.log(props)

    this.state = {
      grid: true,
      map: false,
      filtering: false,
      parks: props.data.allContentfulPark.edges,
      cityState: props.pageContext.cityState,
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
            cityState: this.state.cityState,
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
            fluid(maxWidth: 500, maxHeight: 400) {
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
