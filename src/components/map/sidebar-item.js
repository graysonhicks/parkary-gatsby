import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'
import Link from 'gatsby-link'

import { Subhead, Text } from 'rebass'
import Rating from './../rating'

const SidebarItem = ({ id, title, featuredImage, fields, rating }) => {
  return (
    <SidebarItemContainer to={`/${fields.slug}`}>
      <Thumbnail>
        <Img fluid={featuredImage.fluid} />
      </Thumbnail>
      <Info>
        <SidebarHeading>{title}</SidebarHeading>
        <RatingContainer>
          <Rating id={id} rating={rating} />
        </RatingContainer>
      </Info>
    </SidebarItemContainer>
  )
}

export default SidebarItem

const SidebarItemContainer = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`

const Thumbnail = styled.div`
  width: 20%;
  height: auto;
`

const Info = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`
const SidebarHeading = styled(Subhead)`
  font-size: 16px;
  padding-left: 10px;
`

const RatingContainer = styled.div`
  text-align: right;
`