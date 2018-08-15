import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Container, Text, Row, Column } from 'rebass'

import FeaturedImage from './featured-image'

import { ParkCardToolbar } from './../toolbar'

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
    const { description } = this.props.park

    return (
      <ParkCardContainer>
        <ParkCardToolbar slug={this.state.slug} />
        <StyledParkCard>
          <FeaturedImage park={this.props.park} />

          <ParkInfo>
            <ParkDescription>{description.description}</ParkDescription>
            <StaticParkMap>
              <Text>Static Park Map</Text>
            </StaticParkMap>
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
