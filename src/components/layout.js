import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Provider, Message } from 'rebass'
import firebase from 'firebase/app'

import styled, { css } from 'styled-components'
import { AppContext } from './context'
import AppContextConsumer from './context'

import { withPrefix } from 'gatsby-link'
import Nav from './nav'
import SiteBanner from './banner'

class App extends Component {
  render() {
    // App component that provides initial context values
    return (
      // Rebass provider.
      <Provider>
        {/* App context provider, passing children for layout */}
        <AppContext>
          <Layout children={this.props.children} />
        </AppContext>
      </Provider>
    )
  }
}

// Have to wrap the layout content so we can access context in its lifecycle methods.
const Layout = ({ children }) => (
  <AppContextConsumer>
    {({ data, set }) => (
      <Content context={data} set={set} children={children} />
    )}
  </AppContextConsumer>
)

class Content extends Component {
  state = {
    isLoggedIn: false, // Local signed-in state.
    showLoginMessage: null,
  }
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        // Right now refresh is triggering this as well.  Need to figure out state.
        let loggedOut
        let loggedIn
        if (!user && this.state.user) {
          loggedOut = true
        }
        if (user && !this.state.user) {
          loggedIn = true
        }

        this.setState(
          {
            isLoggedIn: !!user,
            user: user,
            showLoginMessage: loggedIn || loggedOut ? true : false,
            loginMessage: loggedIn
              ? 'Successfully logged in.'
              : 'Successfully logged out.',
          },
          () => {
            setTimeout(() => {
              this.setState({ showLoginMessage: false })
            }, 5000)
            this.props.set({
              isLoggedIn: this.state.isLoggedIn,
              user: user,
            })
          }
        )
      })
    }
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    const { children, data: pageData, context } = this.props

    return (
      <>
        <Helmet
          title={context.siteTitle}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Background currentPage={context.currentPage}>
          <Nav />
          {this.state.showLoginMessage && (
            <SiteBanner message={this.state.loginMessage} />
          )}
          <MainContent>{children}</MainContent>
        </Background>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App

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
