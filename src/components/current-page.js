import React from 'react'
import styled from 'styled-components'

import { Text, colors } from 'evergreen-ui'

import { Light } from './typography'

const CurrentPage = () => <CurrentPageText>search</CurrentPageText>

export default CurrentPage

const CurrentPageText = Light.extend`
  font-size: 1rem;
  margin-left: 30px;
`
