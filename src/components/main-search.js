import React from 'react'
import styled from 'styled-components'
import { Container } from 'rebass'

import Brand from './brand'
import MainSearchInput from './main-search-input'

const MainSearch = () => (
  <SearchContainer>
    <SearchBrand>
      <Brand />
    </SearchBrand>
    <MainSearchInput />
  </SearchContainer>
)

export default MainSearch

const SearchBrand = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`

const SearchContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`
