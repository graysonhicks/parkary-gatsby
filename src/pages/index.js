import React, { Component } from 'react'

// eslint-disable-next-line
import globalStyles from '../styles'

import MainSearch from '../components/search/main-search'

class IndexPage extends Component {
  render() {
    return (
      <>
        <MainSearch pages={this.props.data.allSitePage.edges} />
      </>
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
  }
`
