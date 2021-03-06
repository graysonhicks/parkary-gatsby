import React, { Component } from 'react'
import styled from 'styled-components'

import { Card, Checkbox, Label } from 'rebass'

import GoogleMapWrapper from './map'
import Sidebar from './sidebar'

const StyledSearchOnDragCheckbox = ({
  toggleSearchOnChange,
  searchOnChange,
}) => {
  return (
    <SearchOnDragContainer>
      <SearchOnDragLabel>
        Move/zoom map?
        <SearchOnDragCheckbox
          onChange={toggleSearchOnChange}
          checked={searchOnChange}
        />
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
      boundsHandler,
      toggleSearchOnChange,
      filteredParks,
      searchOnChange,
    } = this.props
    return (
      <StyledMapCard>
        <GoogleMapWrapper
          isMarkerShown
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<MapContainer />}
          mapElement={<div style={{ height: `100%` }} />}
          setActivePark={this.setActivePark}
          setHoverPark={this.setHoverPark}
          clearHoverPark={this.clearHoverPark}
          hoverPark={this.state.hoverPark}
          activePark={this.state.activePark}
          boundsHandler={boundsHandler}
          filteredParks={filteredParks}
          searchOnChange={searchOnChange}
        />
        <StyledSearchOnDragCheckbox
          toggleSearchOnChange={toggleSearchOnChange}
          searchOnChange={searchOnChange}
        />
        <SideBarContainer>
          <Sidebar
            activePark={this.state.activePark}
            clearHoverPark={this.clearHoverPark}
            setHoverPark={this.setHoverPark}
            hoverPark={this.state.hoverPark}
            filteredParks={filteredParks}
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
  width: 150px;
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
