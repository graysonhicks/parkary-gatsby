import React from 'react'
import styled from 'styled-components'

import StarRatingComponent from 'react-star-rating-component'

const EditableRating = ({ id, rating, ...rest }) => {
  return (
    <RatingContainer>
      <StarRatingComponent
        name={`rating-${id}`}
        starCount={5}
        editing={true}
        {...rest}
      />
    </RatingContainer>
  )
}

export { EditableRating }

const Rating = ({ id, rating, ...rest }) => {
  return (
    <RatingContainer>
      <StarRatingComponent
        name={`rating-${id}`}
        starCount={5}
        value={rating}
        editing={false}
        {...rest}
      />
    </RatingContainer>
  )
}

export default Rating

const RatingContainer = styled.div``
