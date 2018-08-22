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
      hoverPark,
      activePark
    } = this.props

    return (
      <GoogleMap
        defaultZoom={17}
        ref={this.myMap}
        onDragEnd={() => boundsHandler(this.myMap.current)}
        onZoomChanged={() => boundsHandler(this.myMap.current)}
        defaultOptions={{
          mapTypeControl: false,
          fullscreenControl: false,
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
                  onMouseOver={() => {setHoverPark(node.id)}}
                  onMouseOut={() => clearHoverPark()}
                  icon={{
                    url: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png',
                    scaledSize:  node.id === (hoverPark || activePark) ? new window.google.maps.Size(22,35) : new window.google.maps.Size(20,32)
                  }}
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
