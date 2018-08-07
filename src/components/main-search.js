import React, { Component } from 'react'

import styled from '../../node_modules/styled-components'
import { Button } from 'evergreen-ui'

import Brand from './brand'
import MainSearchInput from './main-search-input'

const MainSearch = () => (
  <SearchContainer>
    <SearchBrand>
      <Brand />
    </SearchBrand>
    <MainSearchInput />
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
