import React from 'react'

import { Card, Text } from 'evergreen-ui'
import styled from 'styled-components'

const ParkCard = ({ park }) => {
  return (
    <StyledParkCard>
      <Text>{park.title}</Text>
    </StyledParkCard>
  )
}
export default ParkCard

const StyledParkCard = styled(Card)`
  background-color: white;
  height: 80vh;
  width: 80%;
`
