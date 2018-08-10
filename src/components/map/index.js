import React from 'react'

import { Card, Text, Heading } from 'rebass'

import styled from 'styled-components'

import { ResultsContext } from './../context'

const MainMap = () => {
  return (
    <ResultsContext.Consumer>
      {({ parks }) => {
        return (
          <StyledMapCard>
            <Heading>Map Component!</Heading>
            {parks &&
              parks.map(({ node }) => {
                return <Text>{node.title}</Text>
              })}
          </StyledMapCard>
        )
      }}
    </ResultsContext.Consumer>
  )
}
export default MainMap

const StyledMapCard = styled(Card)`
  background-color: white;
  height: 80vh;
  width: 100%;
  margin: 0 10px;
`
