import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'

import { Subhead, Text } from 'rebass'

const SidebarItem = ({ title, description, featuredImage }) => {
  return (
    <SidebarItemContainer>
      <Thumbnail>
        <Img fluid={featuredImage.fluid} />
      </Thumbnail>
      <Info>
        <SidebarHeading>{title}</SidebarHeading>
        <RatingContainer>{description.description}</RatingContainer>
      </Info>
    </SidebarItemContainer>
  )
}

export default SidebarItem

const SidebarItemContainer = styled.div`
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
