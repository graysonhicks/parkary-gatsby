import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { geocodeByAddress } from 'react-places-autocomplete'
import styled from 'styled-components'

import { ResultsContext } from './../context'

class ParkGoogleMap extends Component {
  constructor(props) {
    super(props)
    this.myMap = React.createRef()
  }
  componentDidMount() {
    const bounds = new window.google.maps.LatLngBounds()

    this.myMap.current.props.children.map((marker, i) => {
      bounds.extend(
        new window.google.maps.LatLng(
          marker.props.position.lat,
          marker.props.position.lng
        )
      )
    })

    this.myMap.current.fitBounds(bounds)
  }
  render() {
    return (
      <ResultsContext.Consumer>
        {({ parks }) => {
          console.log(parks)

          return (
            <GoogleMap defaultZoom={17} ref={this.myMap}>
              {this.props.isMarkerShown &&
                parks.map(({ node }, index) => (
                  <Marker
                    key={node.id}
                    position={node.location}
                    parkID={node.id}
                  />
                ))}
            </GoogleMap>
          )
        }}
      </ResultsContext.Consumer>
    )
  }
}

const GoogleMapWrapper = withGoogleMap(ParkGoogleMap)
export default GoogleMapWrapper
