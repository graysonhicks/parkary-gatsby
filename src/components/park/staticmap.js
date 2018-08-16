import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class StaticMap extends Component {
  render() {
    const { id, location } = this.props

    return (
      <GoogleMap
        defaultZoom={17}
        defaultCenter={location}
        defaultOptions={{
          mapTypeControl: false,
        }}
      >
        {this.props.isMarkerShown && <Marker position={location} />}
      </GoogleMap>
    )
  }
}

const StaticMapWrapper = withGoogleMap(StaticMap)
export default StaticMapWrapper
