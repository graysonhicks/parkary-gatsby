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
      grid: true,
      map: false,
      filtering: false,
      parks: props.data.allContentfulPark.edges,
    }
  }

  changeView = () => {
    this.setState({
      grid: !this.state.grid,
      map: !this.state.map,
    })
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
            changeView: this.changeView,
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

export const query = graphql`
  query($cityState: String!) {
    allContentfulPark(filter: { fields: { cityState: { eq: $cityState } } }) {
      edges {
        node {
          title
          description {
            description
          }
          location {
            lat
            lon
          }
          featuredImage {
            fluid(maxWidth: 500, maxHeight: 400) {
              ...GatsbyContentfulFluid
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
