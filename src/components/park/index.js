import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Heading, Text, Row, Column } from 'rebass'

import FeaturedImage from './featured-image'

class MainPark extends Component {
  render() {
    const { description } = this.props.park
    return (
      <StyledParkCard>
        <FeaturedImage park={this.props.park} />

        <ParkInfo>
          <ParkDescription>{description.description}</ParkDescription>
          <StaticParkMap>
            <Text>Static Park Map</Text>
          </StaticParkMap>
        </ParkInfo>
      </StyledParkCard>
    )
  }
}

export default MainPark

const StyledParkCard = styled(Card)`
  background-color: white;
  width: 100%;
  margin-top: 10px;
  max-width: 1024px;
  padding: 0;
`

const ParkInfo = styled(Row)`
  padding: 20px;
`

const ParkDescription = styled(Column)`
  width: 50%;
`

const StaticParkMap = styled(Column)``
