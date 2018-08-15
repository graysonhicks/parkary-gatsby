import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Heading, Button } from 'rebass'
import { MdPhotoLibrary } from 'react-icons/md'

import Rating from './../rating'

class FeaturedImage extends Component {
  render() {
    const { title, rating, featuredImage } = this.props.park
    return (
      <FeaturedImageContainer>
        <ImageContainer>
          <Img fluid={featuredImage.fluid} />
          <ImageOverlay />
          <NonHoverGalleryIcon />
          <CarouselLink>
            <GalleryIcon /> See all images...
          </CarouselLink>
        </ImageContainer>

        <HeaderContainer>
          <ParkHeading>{title}</ParkHeading>
          <Rating rating={rating} />
        </HeaderContainer>
      </FeaturedImageContainer>
    )
  }
}

export default FeaturedImage

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  padding: 30px;
`

const ParkHeading = styled(Heading)`
  color: white;
  transition: transform 0.5s;
`

const ImageOverlay = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #011e05;
  opacity: 0.3;
  transition: opacity 0.5s;
`

const ImageContainer = styled.div``

const GalleryIcon = styled(MdPhotoLibrary)``

const NonHoverGalleryIcon = GalleryIcon.extend`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 2rem;
  opacity: 0.7;
`

const CarouselLink = styled(Button)`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: black;
  background: white;
  opacity: 0.7;
  transition: opacity 0.5s;

  &:hover {
    opacity: 1;
  }

  &:focus,
  &:active {
    box-shadow: 0 0 10px 2px white;
  }
`

const FeaturedImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .gatsby-image-outer-wrapper {
    transition: transform 0.5s;
  }

  &:hover {
    ${ImageOverlay} {
      opacity: 0;
    }

    ${ParkHeading} {
      transform: scale(1.1);
    }

    ${CarouselLink} {
      display: block;
    }

    ${NonHoverGalleryIcon} {
      display: none;
    }

    .gatsby-image-outer-wrapper {
      transform: scale(1.1);
    }
  }
`
