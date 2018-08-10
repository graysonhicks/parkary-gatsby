import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Provider } from 'rebass'

import styled from 'styled-components'
import AppContext from './context'

import { withPrefix } from 'gatsby-link'
import Nav from './nav'

class Layout extends Component {
  render() {
    const { children, data } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }

            logo: allImageSharp(
              filter: { original: { src: { ne: "treelogo" } } }
              limit: 1
            ) {
              edges {
                node {
                  fluid(maxWidth: 50) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <Provider>
            <AppContext.Provider
              value={{
                siteTitle: data.site.siteMetadata.title,
                logo: data.logo.edges[0].node,
              }}
            >
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              />
              <Background>
                <Nav />
                <MainContent>{children}</MainContent>
              </Background>
            </AppContext.Provider>
          </Provider>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-image: url(${withPrefix('/bg.jpg')});
  background-size: cover;
`

const MainContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`
