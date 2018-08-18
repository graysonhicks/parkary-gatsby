import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class ParkGoogleMap extends Component {
  constructor(props) {
    super(props)
    this.myMap = React.createRef()
  }
  componentDidMount() {
    const bounds = new window.google.maps.LatLngBounds()

    this.myMap.current.props.children.map((marker, i) => {
      return (
        marker &&
        bounds.extend(
          new window.google.maps.LatLng(
            marker.props.position.lat,
            marker.props.position.lng
          )
        )
      )
    })

    this.myMap.current.fitBounds(bounds)
  }

  render() {
    const {
      selectedAmenities,
      setActivePark,
      setHoverPark,
      clearHoverPark,
      isMarkerShown,
      boundsHandler,
      parks,
    } = this.props

    return (
      <GoogleMap
        defaultZoom={17}
        ref={this.myMap}
        onBoundsChanged={() => boundsHandler(this.myMap.current)}
        defaultOptions={{
          mapTypeControl: false,
        }}
      >
        {isMarkerShown &&
          parks.map(({ node }) => {
            let hasAllFilteredAmenities = true
            selectedAmenities.map(amenity => {
              if (!node.amenities[amenity]) {
                hasAllFilteredAmenities = false
                return false
              } else {
                return true
              }
            })

            return (
              hasAllFilteredAmenities && (
                <StyledMarker
                  key={node.id}
                  position={node.location}
                  parkID={node.id}
                  onClick={() => setActivePark(node.id)}
                  onMouseOver={() => setHoverPark(node.id)}
                  onMouseOut={() => clearHoverPark()}
                />
              )
            )
          })}
      </GoogleMap>
    )
  }
}

const GoogleMapWrapper = withGoogleMap(ParkGoogleMap)
export default GoogleMapWrapper

const StyledMarker = styled(Marker)`
  ${({ isHover }) =>
    isHover &&
    css`
      width: 100px;
    `};
`
