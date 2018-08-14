import React from 'react'

import { ResultsContext } from './../context'

import SidebarItem from './sidebar-item'

const Sidebar = ({ selectedAmenities }) => {
  return (
    <ResultsContext.Consumer>
      {({ parks }) => {
        return parks.map(({ node }) => {
          let hasAllFilteredAmenities = true
          selectedAmenities.map(amenity => {
            if (!node.amenities[amenity]) {
              hasAllFilteredAmenities = false
            }
          })

          if (hasAllFilteredAmenities) {
            return <SidebarItem key={node.id} {...node} />
          }
        })
      }}
    </ResultsContext.Consumer>
  )
}

export default Sidebar
