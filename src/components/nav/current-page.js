import React from 'react'
import styled from 'styled-components'

import { Text } from 'rebass'

const CurrentPage = () => <CurrentPageText>home</CurrentPageText>

export default CurrentPage

const CurrentPageText = styled(Text)`
  font-size: 1rem;
  margin-left: 30px;
  color: black;
`
