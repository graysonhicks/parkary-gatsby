import React from 'react'
import styled from 'styled-components'

import { Heading } from 'rebass'

import { ResultsContext } from './../context'

import SidebarItem from './sidebar-item'

const Sidebar = () => {
  return (
    <ResultsContext.Consumer>
      {({ parks }) => {
        return parks.map(({ node }) => <SidebarItem {...node} />)
      }}
    </ResultsContext.Consumer>
  )
}

export default Sidebar
