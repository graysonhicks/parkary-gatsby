import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { push } from 'gatsby-link'

import Img from 'gatsby-image'
import { Container, Group, Button } from 'rebass'

import { ResultsContext } from './../context'

class Toolbar extends Component {
  toggleToMap = () => {
    push({
      pathname: '/north-carolina/brevard/map',
      testData: 'map',
    })
  }

  toggleToGrid = () => {
    push({
      pathname: '/north-carolina/brevard/',
      testData: 'grid',
    })
  }
  render() {
    return (
      <ResultsContext.Consumer>
        {({ view, cityState, ...rest }) => {
          console.log(cityState)

          return (
            <Item>
              <Group>
                <ToggleButton
                  onClick={this.toggleToGrid}
                  active={view.grid ? 1 : 0}
                >
                  Grid
                </ToggleButton>
                <ToggleButton
                  onClick={this.toggleToMap}
                  active={view.map ? 1 : 0}
                >
                  Map
                </ToggleButton>
              </Group>
            </Item>
          )
        }}
      </ResultsContext.Consumer>
    )
  }
}

export default Toolbar

const Item = styled(Container)`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  max-width: unset;
`

const ToggleButton = styled(Button)`
  background-color: green;
  border: 2px solid green;
  box-shadow: 0 0 10px 2px lightgreen;

  &:focus,
  &:active {
    box-shadow: 0 0 10px 2px lightgreen;
  }

  ${({ active }) =>
    !active &&
    css`
      background-color: gray;
      color: white;
      border: 2px solid gray;
      box-shadow: none;
    `};
`
