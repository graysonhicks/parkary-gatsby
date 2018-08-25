import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Heading, Text } from 'rebass'

import SidebarItem from './sidebar-item'

const Sidebar = ({ selectedAmenities, filteredParks, ...rest }) => {
  if (filteredParks.length) {
    return (
      // Map over all of the parks.
      filteredParks.map(({ node }) => {
        return <SidebarItem key={node.contentful_id} {...rest} {...node} />
      })
    )
  } else {
    return (
      <NoParksSidebarItem>
        <NoParksSidebarHeading>No parks found.</NoParksSidebarHeading>
        <NoParksSidebarText>
          Sorry! We couldn't find any parks that matched your criteria.
        </NoParksSidebarText>
        <NoParksSidebarText>
          Try changing the filters in the toolbar above, or moving the map.
        </NoParksSidebarText>
        <NoParksSidebarText>
          If you still don't see the park you are looking for go{' '}
          <Link to="/request">here</Link> to request it.
        </NoParksSidebarText>
      </NoParksSidebarItem>
    )
  }
}

export default Sidebar

const NoParksSidebarItem = styled.div`
  padding: 10px;
`

const NoParksSidebarHeading = styled(Heading)`
  margin-bottom: 15px;
`

const NoParksSidebarText = styled(Text)`
  margin-bottom: 15px;
`
