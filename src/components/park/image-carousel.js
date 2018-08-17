import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { Box, Modal, Carousel, Heading, Close } from 'rebass'

class ImageCarousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSlide: 0,
    }
  }

  setCurrentSlide = index => {
    this.setState({
      currentSlide: index,
    })
  }

  render() {
    const { toggleCarousel, parkImages } = this.props

    return (
      <CarouselContainer>
        <CarouselModal>
          <StyledClose onClick={toggleCarousel} />
          <Carousel index={this.state.currentSlide}>
            {parkImages.map(({ fluid }) => (
              <Box key={`${fluid.src}1`}>
                <Img fluid={fluid} />
              </Box>
            ))}
          </Carousel>
          <PreviewRow>
            {parkImages.map(({ fluid }, index) => {
              const isActive = this.state.currentSlide === index ? 1 : 0
              return (
                <PreviewImageContainer
                  key={fluid.src}
                  onClick={() => this.setCurrentSlide(index)}
                  isActive={isActive}
                >
                  <Img fluid={fluid} />
                </PreviewImageContainer>
              )
            })}
          </PreviewRow>
        </CarouselModal>
      </CarouselContainer>
    )
  }
}

export default ImageCarousel

const CarouselContainer = styled.div`
  z-index: 10;
`

const CarouselModal = styled(Modal)`
  width: 70%;
  padding: 0;
`

const StyledCarousel = styled(Carousel)`
  height: 7%;
`

const StyledClose = styled(Close)`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 11;
  color: white;
  font-size: 30px;
  text-shadow: 1px 1px 3px black;
  width: 30px;
  height: 30px;
  padding: 0;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`

const PreviewRow = styled.div`
  display: flex;
  flex-direction: row;
  background-color: lightgray;
  width: 100%;
  max-width: 100%;
  height: 10%;
  overflow-y: hidden;
  overflow-x: scroll;
`

const PreviewImageContainer = styled.div`
  display: inline-block;
  width: 100px;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  ${({ isActive }) =>
    isActive === 1 &&
    css`
      opacity: 1;
      &:hover {
        opacity: 1;
      }
    `};
`
