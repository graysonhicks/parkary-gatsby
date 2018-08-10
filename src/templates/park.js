import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Park from '../components/park'

export default ({ data }) => {
  const park = data.contentfulPark
  return (
    <Layout>
      <Park park={park} />
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
