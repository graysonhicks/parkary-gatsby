import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Park from '../components/park'

export default props => {
  const park = props.data.contentfulPark
  return (
    <Layout>
      <Park park={park} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPark(fields: { slug: { eq: $slug } }) {
      ...ParkInfo
    }
  }
`
