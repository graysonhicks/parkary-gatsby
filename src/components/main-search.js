import React from 'react'

import styled from '../../node_modules/styled-components'
import { SearchInput, Button } from 'evergreen-ui'
import { fadeIn } from '../styles/utils'

import Brand from './brand'

const MainSearch = () => (
  <SearchContainer>
    <SearchBrand>
      <Brand />
    </SearchBrand>
    <MainSearchInput height={40} placeholder="find a city park near you" />
    <SearchButton height={40} appearance="green">
      search
    </SearchButton>
  </SearchContainer>
)

export default MainSearch

const SearchBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`

const MainSearchInput = styled(SearchInput)`
  animation: ${fadeIn} 0.7s linear;
  width: 500px;
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SearchButton = styled(Button)`
  width: 75px;
  margin-top: 10px;
  align-self: flex-end;
  justify-content: center;
`
