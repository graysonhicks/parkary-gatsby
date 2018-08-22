import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Container, Card, Heading, Text } from 'rebass'

class NoResultsPage extends Component {
  render() {
    return (
      <NoResultsCardContainer>
        <NoResultsCard>
          <NoResultsHeading>Sorry! No results found.</NoResultsHeading>
          <TryAgainText>
            Try <Link to="/">searching</Link> a nearby area.
          </TryAgainText>
          <Text>
            Still can't find your favorite or neighborhood park? Go{' '}
            <Link to="/request">here</Link> to submit that it be added to the
            site!
          </Text>
        </NoResultsCard>
      </NoResultsCardContainer>
    )
  }
}

export default NoResultsPage

const NoResultsCardContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 100%;
`

const NoResultsCard = styled(Card)`
  height: 250px;
  width: 500px;
  padding: 20px;
`

const NoResultsHeading = styled(Heading)`
  margin-bottom: 15px;
`

const TryAgainText = styled(Text)`
  margin-bottom: 15px;
`
