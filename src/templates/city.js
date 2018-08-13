import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Results from '../components/results'
import styled from 'styled-components'

import { ResultsContext } from '../components/context'

class CityPage extends Component {
  constructor(props) {
    super(props)

    const { location, data } = props

    this.state = {
      parks: data.allContentfulPark.edges,
      selectedAmenities:
        location.state && location.state.selectedAmenities
          ? location.state.selectedAmenities
          : [],
    }
  }

  handleClickFilter = name => {
    // If filter already on, turn it off.  Otherwise, add to.
    if (this.state.selectedAmenities.includes(name)) {
      this.setState(prevState => {
        let selectedAmenitiesMinusClicked = [...prevState.selectedAmenities]
        const index = selectedAmenitiesMinusClicked.indexOf(name)
        selectedAmenitiesMinusClicked.splice(index, 1)

        return {
          selectedAmenities: selectedAmenitiesMinusClicked,
        }
      })
    } else {
      this.setState(prevState => ({
        selectedAmenities: [...prevState.selectedAmenities, name],
      }))
    }
  }

  render() {
    const { pageContext } = this.props

    return (
      <ResultsLayout currentPage="results">
        <ResultsContext.Provider
          value={{
            view: 'grid',
            parks: this.state.parks,
            cityState: pageContext.cityState,
            selectedAmenities: this.state.selectedAmenities,
            filterParks: this.filterParks,
            handleClickFilter: this.handleClickFilter,
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
