import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'
import { Card, Text, Container, Subhead } from 'rebass'

const ParkCard = ({ park }) => {
  console.log(park)

  return (
    <Item>
      <Thumbnail>
        <Img fluid={park.featuredImage.fluid} />
      </Thumbnail>
      <Title>{park.title}</Title>
      <Description>{park.description.description}</Description>
      <Text>lat: {park.location.lat}</Text>
      <Text>lon: {park.location.lon}</Text>
    </Item>
  )
}

export default ParkCard

const Item = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  width: calc(25% - 10px);
  margin-left: 10px;
  margin-bottom: 10px;
`
const Thumbnail = styled(Container)`
  width: 100%;
  padding: 0;
`

const Title = styled(Subhead)``

const Description = styled(Text)``
