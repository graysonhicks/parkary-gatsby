import React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'
import { Card, Heading, Text } from 'rebass'

const NoResultsCard = () => {
  return (
    <Item>
      <NoResultsHeading>No Results</NoResultsHeading>
      <NoResultsText>
        Sorry! We couldn't find any parks that matched your criteria.
      </NoResultsText>
      <NoResultsText>
        Try changing the filters in the toolbar above.
      </NoResultsText>
      <NoResultsText>
        If you still don't see the park you are looking for go{' '}
        <Link to="/request">here</Link> to request it.
      </NoResultsText>
    </Item>
  )
}

export default NoResultsCard

const Item = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  width: 500px;
  height: 250px;
  margin: 50px auto;
  padding: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

const NoResultsHeading = styled(Heading)`
  margin-bottom: 15px;
`

const NoResultsText = styled(Text)`
  margin-bottom: 15px;
`
