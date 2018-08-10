import React from 'react'

// eslint-disable-next-line
import globalStyles from '../styles'

import Layout from '../components/layout'
import MainSearch from '../components/main-search'

const IndexPage = data => {
  return (
    <Layout currentPage="home">
      <MainSearch />
    </Layout>
  )
}

export default IndexPage
