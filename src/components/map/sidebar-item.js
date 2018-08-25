import React from 'react'
import styled, { css } from 'styled-components'

import Img from 'gatsby-image'
import Link from 'gatsby-link'

import { Subhead, Label } from 'rebass'
import Rating from './../rating'

const SidebarItem = ({
  contentful_id,
  title,
  thumbnail,
  fields,
  rating,
  description,
  hoverPark,
  activePark,
  setHoverPark,
  clearHoverPark,
}) => {
  const isActive = {}
  if (contentful_id === activePark) {
    isActive.active = 1
  } else {
    isActive.active = 0
  }
  const isHover = {}
  if (contentful_id === hoverPark) {
    isHover.hover = 1
  } else {
    isHover.hover = 0
  }

  return (
    <SidebarItemContainer
      to={`/${fields.slug}`}
      state={{ referrer: 'map' }}
      {...isActive}
      {...isHover}
      onMouseEnter={() => setHoverPark(contentful_id)}
      onMouseLeave={() => clearHoverPark(contentful_id)}
    >
      <Thumbnail>
        <Img fluid={thumbnail.fluid} />
      </Thumbnail>
      <Info>
        <SidebarHeading>{title}</SidebarHeading>
        <RatingContainer>
          <Rating id={contentful_id} rating={rating} />
        </RatingContainer>
      </Info>

      <DescriptionContainer {...isActive}>
        {isActive.active === 1 && (
          <Description>{description.description}</Description>
        )}
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

  ${({ hover }) =>
    hover === 1 &&
    css`
      background-color: rgba(0, 128, 128, 0.1);
    `};

  ${({ active }) =>
    active === 1 &&
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

  ${({ active }) =>
    active === 1 &&
    css`
      max-height: 200px;
      transition: max-height 0.5s ease-in-out;
    `};
`

const Description = styled(Label)`
  padding: 7.5px 7.5px 7.5px 0;
`
