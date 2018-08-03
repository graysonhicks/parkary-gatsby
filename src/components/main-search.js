import { SearchInput } from 'evergreen-ui'

import React from 'react'
import styled from '../../node_modules/styled-components'
import { fadeIn } from '../styles/utils'

const MainSearch = () => <MainSearchInput height={40} />

export default MainSearch

const MainSearchInput = styled(SearchInput)`
  animation: ${fadeIn} 0.7s linear;
  width: 500px;
`
