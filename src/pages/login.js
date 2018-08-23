import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PageContextWrapper from '../components/pagewrapper'

import Login from '../components/login/'

class LoginPage extends Component {
  render() {
    return (
      <PageContextWrapper page="login">
        <Login />
      </PageContextWrapper>
    )
  }
}

export default LoginPage

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
