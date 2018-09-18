import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Modal,
  Close,
  Lead,
  Heading,
  Input,
  Label,
  Button,
  Textarea,
} from 'rebass'

import { EditableRating } from '../rating'

class AddReviewModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: props.user.uid,
      parkContentfulId: props.park.contentful_id,
      reviewText: null,
      rating: null,
    }
  }
  handleInputChange = event => {
    console.log(this.state)

    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submit')
    return
  }

  render() {
    const { toggleAddReview, park, user } = this.props
    console.log(this.state)

    return (
      <AddReviewContainer>
        <FormModal>
          <StyledClose onClick={toggleAddReview} />
          <AddReviewHeading>Add Review</AddReviewHeading>
          <AddReviewLead>Review for {park.title}</AddReviewLead>
          <AddReviewForm onSubmit={this.handleSubmit}>
            <Label>Your review:</Label>
            <AddReviewTextArea
              onChange={this.handleInputChange}
              name="reviewText"
              required
            />
            <Label>Your rating (click to rate):</Label>
            <AddReviewRating
              onStarClick={nextValue => {
                this.handleInputChange({
                  target: {
                    type: 'rating',
                    value: nextValue,
                    name: 'rating',
                  },
                })
              }}
              required
            />
            <Button type="submit">Submit</Button>
          </AddReviewForm>
        </FormModal>
      </AddReviewContainer>
    )
  }
}

export default AddReviewModal

const AddReviewContainer = styled.div`
  z-index: 10;
`

const AddReviewForm = styled.form``

const FormModal = styled(Modal)`
  width: 50%;
  padding: 0;
  padding: 20px;
`

const StyledClose = styled(Close)`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 11;
  color: black;
  font-size: 30px;
  /* text-shadow: 1px 1px 3px black; */
  width: 30px;
  height: 30px;
  padding: 0;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`

const AddReviewHeading = styled(Heading)`
  margin-bottom: 15px;
`

const AddReviewLead = styled(Lead)`
  margin-bottom: 15px;
`

const AddReviewTextArea = styled(Textarea)`
  margin-bottom: 10px;
`

const AddReviewRating = styled(EditableRating)`
  margin-bottom: 10px;
`
