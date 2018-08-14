import React from 'react'
import styled from 'styled-components'

import { Card } from 'rebass'

import GoogleMapWrapper from './map'
import Sidebar from './sidebar'

const MainMap = ({ selectedAmenities }) => {
  return (
    <StyledMapCard>
      <GoogleMapWrapper
        isMarkerShown
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<MapContainer />}
        mapElement={<div style={{ height: `100%` }} />}
        selectedAmenities={selectedAmenities}
      />
      <SideBarContainer>
        <Sidebar selectedAmenities={selectedAmenities} />
      </SideBarContainer>
    </StyledMapCard>
  )
}
export default MainMap

const StyledMapCard = styled(Card)`
  background-color: white;
  display: flex;
  height: 80vh;
  width: 100%;
  margin: 10px 10px;
`
const MapContainer = styled.div`
  height: 100%;
  width: 75%;
`

const SideBarContainer = styled.div`
  width: 25%;
  padding: 10px;
`
