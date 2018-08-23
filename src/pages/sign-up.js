import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PageContextWrapper from '../components/pagewrapper'

import SignUp from '../components/signup/'

class SignUpPage extends Component {
  render() {
    return (
      <PageContextWrapper page="sign up">
        <SignUp />
      </PageContextWrapper>
    )
  }
}

export default SignUpPage

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
