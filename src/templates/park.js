import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Park from '../components/park'

export default props => {
  const park = props.data.contentfulPark
  const referrer = props.location.state.referrer

  return (
    <Layout>
      <Park park={park} referrer={referrer} />
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
