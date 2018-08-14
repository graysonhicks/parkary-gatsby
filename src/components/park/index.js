import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Card, Heading } from 'rebass'

import Rating from './../rating'

const MainPark = ({ park: { title, rating, featuredImage } }) => {
  return (
    <StyledParkCard>
      <HeaderContainer>
        <Heading>{title}</Heading>
        <Rating rating={rating} />
      </HeaderContainer>
      <ImagesContainer>
        <FeaturedImage>
          <Img fluid={featuredImage.fluid} />
        </FeaturedImage>
      </ImagesContainer>
    </StyledParkCard>
  )
}

export default MainPark

const StyledParkCard = styled(Card)`
  background-color: white;
  width: 80%;
  margin-top: 10px;
`

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
`

const FeaturedImage = styled.div`
  width: 600px;
  height: auto;
`
