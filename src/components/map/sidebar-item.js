import React from 'react'
import styled, { css } from 'styled-components'

import Img from 'gatsby-image'
import Link from 'gatsby-link'

import { Subhead, Label } from 'rebass'
import Rating from './../rating'

const SidebarItem = ({
  id,
  title,
  thumbnail,
  fields,
  rating,
  activePark,
  description,
}) => {
  const isActive = id === activePark ? true : false
  return (
    <SidebarItemContainer
      to={`/${fields.slug}`}
      state={{ referrer: 'map' }}
      isActive={isActive}
    >
      <Thumbnail>
        <Img fluid={thumbnail.fluid} />
      </Thumbnail>
      <Info>
        <SidebarHeading>{title}</SidebarHeading>
        <RatingContainer>
          <Rating id={id} rating={rating} />
        </RatingContainer>
      </Info>

      <DescriptionContainer isActive={isActive}>
        {isActive && <Description>{description.description}</Description>}
      </DescriptionContainer>
    </SidebarItemContainer>
  )
}

export default SidebarItem

const SidebarItemContainer = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none;
  padding: 10px;
  color: black;

  &:hover {
    background-color: rgba(0, 128, 128, 0.1);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: rgba(0, 128, 128, 0.3);
      transition: background-color 0.5s;
    `};
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
  font-size: 0.8rem;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
`

const RatingContainer = styled.div`
  text-align: right;
`

const DescriptionContainer = styled.div`
  width: 100%;
  max-height: 0;
  transition: max-height 0.5s ease-in-out;
  overflow: hidden;

  ${({ isActive }) =>
    isActive &&
    css`
      max-height: 200px;
      transition: max-height 0.5s ease-in-out;
    `};
`

const Description = styled(Label)`
  padding: 7.5px 7.5px 7.5px 0;
`
