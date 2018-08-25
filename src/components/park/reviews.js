import React, { Component } from 'react'
import styled from 'styled-components'
import { Heading, Text, Lead, Small } from 'rebass'

import Rating from './../rating'

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
  render() {
    const { reviews } = this.props
    return (
      <>
        <ReviewsHeading>Reviews</ReviewsHeading>
        {reviews.map(review => (
          <Review {...review} />
        ))}
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
