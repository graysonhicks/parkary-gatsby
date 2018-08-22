import React, { Component } from 'react'
import { graphql } from 'gatsby'
// eslint-disable-next-line
import globalStyles from '../styles'
import PageContextWrapper from '../components/pagewrapper'

import MainSearch from '../components/search/main-search'

class IndexPage extends Component {
  render() {
    return (
      <PageContextWrapper page="home">
        <MainSearch pages={this.props.data.allSitePage.edges} />
      </PageContextWrapper>
    )
  }
}

export default IndexPage

export const pagesQuery = graphql`
  query {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
    site {
      ...SiteInfo
    }
  }
`
