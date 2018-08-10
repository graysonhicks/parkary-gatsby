import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Results from '../components/results'
import styled from 'styled-components'

const CityPage = ({ data }) => {
  const parks = data.allContentfulPark.edges

  return (
    <ResultsLayout currentPage="results">
      <Results parks={parks} />
    </ResultsLayout>
  )
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
