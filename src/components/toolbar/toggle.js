import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { push } from 'gatsby-link'

import { Button } from 'rebass'

import { ResultsContext } from './../context'

class Toggle extends Component {
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
      <ResultsContext.Consumer>
        {({ view, cityState, ...rest }) => {
          return (
            <>
              <ToggleButton
                onClick={this.toggleToGrid}
                active={view === 'grid' ? 1 : 0}
              >
                Grid
              </ToggleButton>
              <ToggleButton
                onClick={this.toggleToMap}
                active={view === 'map' ? 1 : 0}
              >
                Map
              </ToggleButton>
            </>
          )
        }}
      </ResultsContext.Consumer>
    )
  }
}

export default Toggle

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
      opacity: 0.5;
    `};
`
