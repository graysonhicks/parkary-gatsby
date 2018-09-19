import React, { Component } from 'react'
import styled from 'styled-components'
import { createClient } from 'contentful-management'
import {
  Modal,
  Close,
  Lead,
  Heading,
  Label,
  Input,
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
      title: null,
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

    const client = createClient({
      accessToken:
        'CFPAT-d0c50c2e498bb9776c4839d8a4ce950e22cbb496a17b6560d170995c3a20edf7',
    })
    client
      .getSpace('00xgplm2tq8k')
      .then(space => space.getEnvironment('master'))
      .then(environment =>
        environment.createEntry('review', {
          fields: {
            title: { 'en-US': this.state.title },
            userId: { 'en-US': this.state.userId },
            reviewText: { 'en-US': this.state.reviewText },
            park: {
              'en-US': {
                sys: {
                  id: this.state.parkContentfulId,
                  type: 'Link',
                  linkType: 'Entry',
                },
              },
            },
            rating: { 'en-US': this.state.rating },
          },
        })
      )
      .then(entry => entry.publish())
      .then(res => this.props.toggleAddReview())
      .catch(console.error)
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
            <Label>Title:</Label>
            <Input name="title" onChange={this.handleInputChange} required />
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
