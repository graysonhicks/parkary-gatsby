import React, { Component } from 'react'

import AppContextConsumer from '../components/context'

// Created this so not having to create same markup for each page.
// Wraps the page and sets its current page display name and total site
// title in AppContext.  Using context in lifecycle methods means
// passing the context in as a prop, so this does that.

const PageContextWrapper = ({ page, children }) => {
  return (
    <AppContextConsumer>
      {({ set }) => {
        return (
          <ContextSetter set={set} page={page}>
            {children}
          </ContextSetter>
        )
      }}
    </AppContextConsumer>
  )
}

class ContextSetter extends Component {
  componentDidMount() {
    this.props.set({
      currentPage: this.props.page,
      siteTitle: `Parkary - ${this.props.page}`,
    })
  }
  render() {
    return <>{this.props.children}</>
  }
}

export default PageContextWrapper
