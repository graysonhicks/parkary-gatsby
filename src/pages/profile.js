import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PageContextWrapper from '../components/pagewrapper'
import AuthenticationWrapper from '../components/authenticationwrapper'
import Profile from '../components/profile/'

class ProfilePage extends Component {
  render() {
    return (
      <AuthenticationWrapper>
        <PageContextWrapper page="profile">
          <Profile />
        </PageContextWrapper>
      </AuthenticationWrapper>
    )
  }
}

export default ProfilePage

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
