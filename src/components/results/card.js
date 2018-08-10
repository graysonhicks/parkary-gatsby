import React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'

import Img from 'gatsby-image'
import { Card, Text, Container, Subhead } from 'rebass'

const ParkCard = ({ park }) => {
  return (
    <Item>
      <ParkLink to={`/${park.fields.slug}`}>
        <Thumbnail>
          <Img fluid={park.featuredImage.fluid} />
        </Thumbnail>
        <Title>{park.title}</Title>
        <Description>{park.description.description}</Description>
        <Text>lat: {park.location.lat}</Text>
        <Text>lng: {park.location.lng}</Text>
      </ParkLink>
    </Item>
  )
}

export default ParkCard

const Item = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  width: calc(20% - 10px);
  margin-left: 10px;
  margin-bottom: 10px;
  height: 465px;
`

const ParkLink = styled(Link)`
  text-decoration: none;
`

const Thumbnail = styled(Container)`
  width: 100%;
  padding: 0;
`

const Title = styled(Subhead)`
  width: 100%;
  font-size: 18px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-weight: 600;
  color: black;
`

const Description = styled(Text)`
  width: 100%;
  color: black;
`
