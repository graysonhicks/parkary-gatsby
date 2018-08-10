import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Provider } from 'rebass'

import styled, { css } from 'styled-components'
import { AppContext } from './context'

import { withPrefix } from 'gatsby-link'
import Nav from './nav'

class Layout extends Component {
  render() {
    const { children, currentPage } = this.props
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
                currentPage: currentPage,
              }}
            >
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              />
              <Background page={currentPage}>
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
  z-index: -1;
  background-image: url(${withPrefix('/bg.jpg')});
  background-size: cover;
  padding-top: 50px;
  height: 100%;
  min-height: 100%;

  /* Only let page overflow on results page so can scroll */
  ${({ page }) =>
    page === 'results' &&
    css`
      height: auto;
    `};
`

const MainContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`
