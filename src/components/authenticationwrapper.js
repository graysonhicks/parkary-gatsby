import React, { Component } from 'react'
import { navigate } from 'gatsby'
import AppContextConsumer from '../components/context'

// Created this so not having to create same markup for each page.
// Wraps the page and sets its current page display name and total site
// title in AppContext.  Using context in lifecycle methods means
// passing the context in as a prop, so this does that.

const AuthenticationWrapper = ({ children }) => {
  return (
    <AppContextConsumer>
      {({ data }) => {
        return <ContextSetter data={data}>{children}</ContextSetter>
      }}
    </AppContextConsumer>
  )
}

class ContextSetter extends Component {
  componentDidMount() {
    if (!sessionStorage.getItem('isLoggedIn')) {
      navigate(`/`)
    }
  }
  render() {
    return <>{this.props.children}</>
  }
}

export default AuthenticationWrapper
