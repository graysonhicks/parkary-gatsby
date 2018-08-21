import React from 'react'

import SidebarItem from './sidebar-item'

const Sidebar = ({ selectedAmenities, parks, ...rest }) => {
  console.log(parks)

  return (
    // Map over all of the parks.
    parks.map(({ node }) => {
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
  )
}

export default Sidebar
