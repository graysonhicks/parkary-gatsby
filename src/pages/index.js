import React, { Component } from 'react'

// eslint-disable-next-line
import globalStyles from '../styles'

import Layout from '../components/layout'
import MainSearch from '../components/search/main-search'

class IndexPage extends Component {
  render() {
    return (
      <Layout currentPage="home">
        <MainSearch />
      </Layout>
    )
  }
}

export default IndexPage
