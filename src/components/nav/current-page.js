import React from 'react'
import styled from 'styled-components'

import { Text } from 'rebass'
import AppContextConsumer from './../context'

const CurrentPage = () => {
  return (
    <AppContextConsumer>
      {({ data }) => <CurrentPageText>{data.currentPage}</CurrentPageText>}
    </AppContextConsumer>
  )
}

export default CurrentPage

const CurrentPageText = styled(Text)`
  font-size: 1rem;
  margin-left: 30px;
  color: black;
`
