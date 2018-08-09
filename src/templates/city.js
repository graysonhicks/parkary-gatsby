import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MainSearch from '../components/main-search'

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <MainSearch />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query($cityState: String!) {
    allContentfulPark(filter: { fields: { cityState: { eq: $cityState } } }) {
      edges {
        node {
          title
          location {
            lat
            lon
          }
        }
      }
    }
  }
`
