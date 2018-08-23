import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Provider } from 'rebass'
import firebase from 'firebase'

import styled, { css } from 'styled-components'
import { AppContext } from './context'
import AppContextConsumer from './context'

import { withPrefix } from 'gatsby-link'
import Nav from './nav'

class Layout extends Component {
  state = {
    isLoggedIn: false, // Local signed-in state.
  }
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user =>
        this.setState({ isLoggedIn: !!user, user: user })
      )
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    const { children } = this.props

    return (
      // Rebass provider.
      <Provider>
        {/* App context provider, followed immediately by consumer */}
        <AppContext>
          <AppContextConsumer>
            {({ data }) => (
              <>
                <Helmet
                  title={data.siteTitle}
                  meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                  ]}
                />
                <Background currentPage={data.currentPage}>
                  <Nav isLoggedIn={this.state.isLoggedIn} />
                  <MainContent>{children}</MainContent>
                </Background>
              </>
            )}
          </AppContextConsumer>
        </AppContext>
      </Provider>
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
  ${({ currentPage }) =>
    (currentPage === 'results' || currentPage === 'park') &&
    css`
      height: auto;
    `};
`

const MainContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`
