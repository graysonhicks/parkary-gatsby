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
  render() {
    const { toggleAddReview, park, user } = this.props

    return (
      <AddReviewContainer>
        <FormModal>
          <StyledClose onClick={toggleAddReview} />
          <Heading>Add Review</Heading>
          <Lead>Review for {park.title}</Lead>
          <Input value={park.contentful_id} disabled type="hidden" />
          <Label>Your review:</Label>
          <Textarea />
          <Label>Your rating:</Label>
          <EditableRating />
          <Button>Submit</Button>
        </FormModal>
      </AddReviewContainer>
    )
  }
}

export default AddReviewModal

const AddReviewContainer = styled.div`
  z-index: 10;
`

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
