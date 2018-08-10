import React from 'react'
import styled from 'styled-components'

import { Text } from 'rebass'
import { AppContext } from './../context'

const CurrentPage = () => {
  return (
    <AppContext.Consumer>
      {({ currentPage }) => <CurrentPageText>{currentPage}</CurrentPageText>}
    </AppContext.Consumer>
  )
}

export default CurrentPage

const CurrentPageText = styled(Text)`
  font-size: 1rem;
  margin-left: 30px;
  color: black;
`
