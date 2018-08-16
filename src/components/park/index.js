import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Text, Row, Column } from 'rebass'

import FeaturedImage from './featured-image'

import { ParkCardToolbar } from './../toolbar'
import StaticMapWrapper from './staticmap'
import Amenities from './amenities'
import ShareIcons from './share'

class MainPark extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slug: '',
    }
  }
  componentDidMount() {
    const {
      fields: { cityState },
    } = this.props.park

    const { referrer } = this.props

    this.setState({
      slug: this.parseReferrer(referrer, cityState),
    })
  }
  parseReferrer(referrer, cityState) {
    let slug
    if (!referrer || referrer === 'grid') {
      slug = cityState
    } else {
      slug = `${cityState}/map`
    }

    return slug
  }
  render() {
    console.log(this.props)

    const { description, location, amenities } = this.props.park

    return (
      <ParkCardContainer>
        <ParkCardToolbar slug={this.state.slug} />
        <StyledParkCard>
          <FeaturedImage park={this.props.park} />

          <ParkInfo>
            <BasicInfo>
              <ParkDescription>{description.description}</ParkDescription>
              <Amenities amenities={amenities} />
              <ShareIcons park={this.props.park} />
            </BasicInfo>

            <StaticParkMapContainer>
              <StaticMapWrapper
                isMarkerShown
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<MapContainer />}
                mapElement={<div style={{ height: `100%` }} />}
                location={location}
              />
            </StaticParkMapContainer>
          </ParkInfo>
        </StyledParkCard>
      </ParkCardContainer>
    )
  }
}

export default MainPark

const ParkCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const StyledParkCard = styled(Card)`
  background-color: white;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 50px;
  max-width: 1024px;
  padding: 0;
`

const ParkInfo = styled(Row)`
  padding: 20px;
  min-height: 400px;
`

const ParkDescription = styled(Text)`
  margin-bottom: 20px;
`

const BasicInfo = styled.div`
  width: 50%;
  padding: 0 20px;
`

const StaticParkMapContainer = styled.div`
  width: 50%;
`

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
`
