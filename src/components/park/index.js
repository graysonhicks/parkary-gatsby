import React from 'react'

import { Card, Text } from 'rebass'

import styled from 'styled-components'

const MainPark = ({ park }) => {
  return (
    <StyledParkCard>
      <Text>{park.title}</Text>
    </StyledParkCard>
  )
}
export default MainPark

const StyledParkCard = styled(Card)`
  background-color: white;
  height: 80vh;
  width: 80%;
`
