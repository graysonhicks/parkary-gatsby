import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PageContextWrapper from '../components/pagewrapper'

import ForgotPassword from '../components/forgotpassword/'

class ForgotPasswordPage extends Component {
  render() {
    return (
      <PageContextWrapper page="reset password">
        <ForgotPassword />
      </PageContextWrapper>
    )
  }
}

export default ForgotPasswordPage

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
