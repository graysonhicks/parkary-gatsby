import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { Container, Card, Heading, Text } from 'rebass'

const NotFoundPage = () => (
  <NotFoundContainer>
    <NotFoundCard>
      <NotFoundHeading>404 - NOT FOUND</NotFoundHeading>
      <NotFoundText>Sorry! Doesn't look like anything is here.</NotFoundText>
      <NotFoundText>
        Click <Link to="/">here</Link> to go back home.
      </NotFoundText>
    </NotFoundCard>
  </NotFoundContainer>
)

export default NotFoundPage

const NotFoundContainer = styled(Container)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`

const NotFoundCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
`

const NotFoundHeading = styled(Heading)`
  margin-bottom: 15px;
`

const NotFoundText = styled(Text)`
  margin-bottom: 15px;
`
