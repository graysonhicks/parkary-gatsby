import React from 'react'

import Layout from '../components/layout'
import ParkCard from '../components/parkcard/card'

export default ({ data }) => {
  const park = data.contentfulPark
  return (
    <Layout>
      <ParkCard park={park} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPark(fields: { slug: { eq: $slug } }) {
      title
    }
  }
`
