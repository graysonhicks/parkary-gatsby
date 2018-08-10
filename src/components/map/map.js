import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import styled from 'styled-components'

export const GoogleMapWrapper = withGoogleMap(props => (
  <StyledMap
    defaultZoom={17}
    defaultCenter={{ lat: 40.770393, lng: -73.988499 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 40.770393, lng: -73.988499 }} />
    )}
  </StyledMap>
))

const StyledMap = styled(GoogleMap)`
  width: 100%;
`

export const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`
