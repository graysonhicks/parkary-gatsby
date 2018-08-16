import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import { ResultsContext } from './../context'

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
    return (
      <ResultsContext.Consumer>
        {({ parks }) => {
          return (
            <GoogleMap
              defaultZoom={17}
              ref={this.myMap}
              defaultOptions={{
                mapTypeControl: false,
              }}
            >
              {this.props.isMarkerShown &&
                parks.map(({ node }) => {
                  let hasAllFilteredAmenities = true
                  this.props.selectedAmenities.map(amenity => {
                    if (!node.amenities[amenity]) {
                      hasAllFilteredAmenities = false
                      return false
                    } else {
                      return true
                    }
                  })

                  return (
                    hasAllFilteredAmenities && (
                      <Marker
                        key={node.id}
                        position={node.location}
                        parkID={node.id}
                      />
                    )
                  )
                })}
            </GoogleMap>
          )
        }}
      </ResultsContext.Consumer>
    )
  }
}

const GoogleMapWrapper = withGoogleMap(ParkGoogleMap)
export default GoogleMapWrapper
