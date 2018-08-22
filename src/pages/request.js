import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import {
  Container,
  Card,
  Heading,
  Lead,
  Label,
  Input,
  Select,
  Button,
} from 'rebass'

class RequestPage extends Component {
  render() {
    return (
      <RequestCardContainer>
        <RequestCard>
          <RequestHeading>Request a park</RequestHeading>
          <RequestLead>
            We want to catalogue as many parks as we can. Tell us about yours!
          </RequestLead>
          <Label>Park Name</Label>
          <RequestInput />
          <Label>Park City</Label>
          <RequestInput />
          <Label>Park State</Label>
          <StateSelect>
            <option value="">State</option>
          </StateSelect>
          <Button>Submit</Button>
        </RequestCard>
      </RequestCardContainer>
    )
  }
}

export default RequestPage

const RequestCardContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 100%;
`

const RequestCard = styled(Card)`
  width: 500px;
  padding: 20px;
`

const RequestHeading = styled(Heading)`
  margin-bottom: 15px;
`

const RequestLead = styled(Lead)`
  margin-bottom: 15px;
`

const RequestInput = styled(Input)`
  margin-bottom: 15px;
`

const StateSelect = styled(Select)`
  margin-bottom: 15px;
`
