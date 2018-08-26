import React from 'react'
import styled from 'styled-components'

import StarRatingComponent from 'react-star-rating-component'

const EditableRating = ({ id, rating }) => {
  return (
    <RatingContainer>
      <StarRatingComponent name={`rating-${id}`} starCount={5} editing={true} />
    </RatingContainer>
  )
}

export { EditableRating }

const Rating = ({ id, rating }) => {
  return (
    <RatingContainer>
      <StarRatingComponent
        name={`rating-${id}`}
        starCount={5}
        value={rating}
        editing={false}
      />
    </RatingContainer>
  )
}

export default Rating

const RatingContainer = styled.div``
