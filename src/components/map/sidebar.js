import React from 'react'

import SidebarItem from './sidebar-item'

const Sidebar = ({ selectedAmenities, filteredParks, ...rest }) => {
  return (
    // Map over all of the parks.
    filteredParks.map(({ node }) => {
      return <SidebarItem key={node.id} {...rest} {...node} />
    })
  )
}

export default Sidebar
