import React, { Component } from 'react'
import styled from 'styled-components'

import { Card } from 'rebass'

import GoogleMapWrapper from './map'
import Sidebar from './sidebar'

class MainMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePark: null,
      hoverPark: null,
    }
  }
  setActivePark = parkId => {
    if (parkId !== this.state.activePark) {
      this.setState({
        activePark: parkId,
      })
    } else {
      this.clearActivePark()
    }
  }
  clearActivePark = () => {
    this.setState({
      activePark: null,
    })
  }
  setHoverPark = parkId => {
    this.setState({
      hoverPark: parkId,
    })
  }
  clearHoverPark = () => {
    this.setState({
      hoverPark: null,
    })
  }
  render() {
    const { selectedAmenities } = this.props
    return (
      <StyledMapCard>
        <GoogleMapWrapper
          isMarkerShown
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<MapContainer />}
          mapElement={<div style={{ height: `100%` }} />}
          selectedAmenities={selectedAmenities}
          setActivePark={this.setActivePark}
          setHoverPark={this.setHoverPark}
          clearHoverPark={this.clearHoverPark}
        />
        <SideBarContainer>
          <Sidebar
            selectedAmenities={selectedAmenities}
            activePark={this.state.activePark}
            setHoverPark={this.setHoverPark}
            hoverPark={this.state.hoverPark}
          />
        </SideBarContainer>
      </StyledMapCard>
    )
  }
}
export default MainMap

const StyledMapCard = styled(Card)`
  background-color: white;
  display: flex;
  height: 80vh;
  width: 100%;
  margin: 10px 10px;
  padding-right: 0;
`
const MapContainer = styled.div`
  height: 100%;
  width: 70%;
`

const SideBarContainer = styled.div`
  width: 30%;
`
