import React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'

import Img from 'gatsby-image'
import { Card, Text, Container, Subhead } from 'rebass'

import Rating from './../rating'

const ParkCard = ({
  park: { id, fields, thumbnail, title, description, rating },
}) => {
  return (
    <Item>
      <ParkLink to={fields.slug} state={{ referrer: 'results' }}>
        <Thumbnail>
          <Img fluid={thumbnail.fluid} />
        </Thumbnail>
        <Title>{title}</Title>
        <Description>{description.description}</Description>
        <Rating id={id} rating={rating} />
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
  width: calc(25% - 10px);
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 0;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

const ParkLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
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
  margin-bottom: 5px;
`
