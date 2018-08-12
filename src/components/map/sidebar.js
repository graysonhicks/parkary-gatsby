import React from 'react'

import { ResultsContext } from './../context'

import SidebarItem from './sidebar-item'

const Sidebar = () => {
  return (
    <ResultsContext.Consumer>
      {({ parks }) => {
        return parks.map(({ node }) => <SidebarItem key={node.id} {...node} />)
      }}
    </ResultsContext.Consumer>
  )
}

export default Sidebar
