import React, { Component } from 'react'
import styled from 'styled-components'
import { Heading, Text, Lead, Small, ButtonTransparent } from 'rebass'

import Rating from './../rating'
import { navigate } from '@reach/router'

const Review = ({ title, reviewText, rating, createdAt, userId }) => (
  <ReviewContainer>
    <Lead>{title}</Lead>
    <Small>
      created {createdAt} by Firebase user: {userId}
    </Small>
    <Text>{reviewText.reviewText}</Text>
    <Rating rating={rating} />
  </ReviewContainer>
)

class ParkCardReviews extends Component {
  reviewClick = () => {
    if (this.props.user) {
      this.props.toggleAddReview()
    } else {
      this.props.toggleAddReview()
    }
  }
  render() {
    const { reviews } = this.props
    return (
      <>
        <ReviewsHeading>Reviews</ReviewsHeading>
        {reviews && reviews.map(review => <Review {...review} />)}
        {!reviews && (
          <Text>
            Sorry! No reviews yet. Be the first to write a review by{' '}
            <ButtonTransparent onClick={() => this.reviewClick()}>
              clicking here.
            </ButtonTransparent>
          </Text>
        )}
      </>
    )
  }
}

export default ParkCardReviews

const ReviewsHeading = styled(Heading)`
  margin-bottom: 15px;
`

const ReviewContainer = styled.div`
  margin-bottom: 15px;
`
