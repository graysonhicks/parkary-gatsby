import React, { Component } from 'react'
import styled from 'styled-components'

import { Card, Checkbox, Label } from 'rebass'

import GoogleMapWrapper from './map'
import Sidebar from './sidebar'

const StyledSearchOnDragCheckbox = ({ toggleSearchOnChange }) => {
  return (
    <SearchOnDragContainer>
      <SearchOnDragLabel>
        Search on drag?
        <SearchOnDragCheckbox onChange={toggleSearchOnChange} />
      </SearchOnDragLabel>
    </SearchOnDragContainer>
  )
}
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
    const {
      selectedAmenities,
      parks,
      boundsHandler,
      toggleSearchOnChange,
    } = this.props
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
          boundsHandler={boundsHandler}
          parks={parks}
        />
        <StyledSearchOnDragCheckbox
          toggleSearchOnChange={toggleSearchOnChange}
        />
        <SideBarContainer>
          <Sidebar
            selectedAmenities={selectedAmenities}
            activePark={this.state.activePark}
            setHoverPark={this.setHoverPark}
            hoverPark={this.state.hoverPark}
            parks={parks}
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

const SearchOnDragContainer = styled(Card)`
  height: 40px;
  position: absolute;
  width: 130px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px;
  margin-top: 2px;
  margin-left: 2px;
`

const SearchOnDragLabel = styled(Label)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 12px;
`

const SearchOnDragCheckbox = styled(Checkbox)`
  margin-right: 0;
`

const SideBarContainer = styled.div`
  width: 30%;
`
