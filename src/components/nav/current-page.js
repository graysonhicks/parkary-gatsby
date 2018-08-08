import React from 'react'
import styled from 'styled-components'

import { Text, colors } from 'evergreen-ui'

const CurrentPage = () => <CurrentPageText>search</CurrentPageText>

export default CurrentPage

const CurrentPageText = styled(Text)`
  font-size: 1rem;
  margin-left: 30px;
  color: ${colors.neutral['1000']};
`
