import React, { Component } from 'react'
import styled from 'styled-components'
import { Heading, Text, Lead, Small, ButtonTransparent } from 'rebass'

import Rating from './../rating'
import { navigate } from '@reach/router'

const Review = ({ title, reviewText, rating, createdAt, userId }) => (
  <ReviewContainer>
    <Lead>{title}</Lead>
    <Rating rating={rating} />
    <ReviewDate>
      created {createdAt} by Firebase user: {userId}
    </ReviewDate>
    <ReviewText>{reviewText.reviewText}</ReviewText>
  </ReviewContainer>
)

class ParkCardReviews extends Component {
  reviewClick = () => {
    if (this.props.user) {
      this.props.toggleAddReview()
    } else {
      this.props.toggleLoginModal()
    }
  }
  render() {
    const { reviews } = this.props

    return (
      <>
        <ReviewsHeading>
          Reviews
          <AddReviewLink onClick={() => this.reviewClick()}>
            Add your review...
          </AddReviewLink>
        </ReviewsHeading>
        {reviews &&
          reviews.map(review => (
            <Review key={review.contentful_id} {...review} />
          ))}
        {!reviews && (
          <ReviewText>
            Sorry! No reviews yet. Be the first to write a review by{' '}
            <ButtonTransparent onClick={() => this.reviewClick()}>
              clicking here.
            </ButtonTransparent>
          </ReviewText>
        )}
      </>
    )
  }
}

export default ParkCardReviews

const ReviewsHeading = styled(Heading)`
  margin-bottom: 15px;
  border-bottom: 1px solid black;
`

const AddReviewLink = styled(ButtonTransparent)`
  cursor: pointer;
`

const ReviewContainer = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid lightgray;
`

const ReviewDate = styled(Small)`
  margin-bottom: 7.5px;
`

const ReviewText = styled(Text)`
  margin-top: 7.5px;
  margin-bottom: 7.5px;
`
