import React, { Component } from 'react'

import AppContextConsumer from '../components/context'

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
