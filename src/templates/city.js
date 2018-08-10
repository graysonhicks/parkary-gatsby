import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Results from '../components/results'

const CityPage = ({ data }) => {
  const parks = data.allContentfulPark.edges

  return (
    <Layout>
      <Results parks={parks} />
    </Layout>
  )
}

export default CityPage

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
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
