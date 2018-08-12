import React, { Component } from 'react'
import styled from 'styled-components'

import { push } from 'gatsby-link'

import { Container, Group } from 'rebass'

import Toggle from './toggle'
import BackButton from './backbutton'
import FilterMenu from './filter'

class Toolbar extends Component {
  toggleToMap = () => {
    push({
      pathname: '/north-carolina/brevard/map',
    })
  }

  toggleToGrid = () => {
    push({
      pathname: '/north-carolina/brevard/',
    })
  }

  render() {
    return (
      <ToolbarContainer>
        <BackButton />
        <Group>
          <Toggle />
        </Group>
        <FilterMenu />
      </ToolbarContainer>
    )
  }
}

export default Toolbar

const ToolbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  max-width: unset;
  background-color: white;
  margin: 0;
  background-color: lightgray;
`
