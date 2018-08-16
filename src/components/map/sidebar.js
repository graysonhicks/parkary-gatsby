import React from 'react'

import { ResultsContext } from './../context'

import SidebarItem from './sidebar-item'

const Sidebar = ({ selectedAmenities, ...rest }) => {
  return (
    <ResultsContext.Consumer>
      {({ parks }) => {
        // Map over all of the parks.
        return parks.map(({ node }) => {
          let hasAllFilteredAmenities = true
          // Check each selected amenity (filter)
          selectedAmenities.map(amenity => {
            // If the filter is not a feature (obj prop) of the park, return false;
            if (!node.amenities[amenity]) {
              // Set the flag to false on single fail (park must have all amenities)
              hasAllFilteredAmenities = false
              return false
            } else {
              return true
            }
          })

          return (
            hasAllFilteredAmenities && (
              <SidebarItem key={node.id} {...rest} {...node} />
            )
          )
        })
      }}
    </ResultsContext.Consumer>
  )
}

export default Sidebar
