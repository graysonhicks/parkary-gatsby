import React from 'react'
// eslint-disable-next-line
import globalStyles from '../styles'

import Layout from '../components/layout'
import MainSearch from '../components/main-search'

const IndexPage = data => {
  console.log(data)

  return (
    <Layout>
      <MainSearch />
    </Layout>
  )
}

export default IndexPage

export const MainQuery = graphql`
  query nextEventQuery {
    allContentfulPark {
      edges {
        node {
          images
        }
      }
    }
  }
`
