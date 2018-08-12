import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { push } from 'gatsby-link'

import { MdGridOn, MdMap } from 'react-icons/md'
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
                <StyledGridIcon />
                Grid
              </ToggleButton>
              <ToggleButton
                onClick={this.toggleToMap}
                active={view === 'map' ? 1 : 0}
              >
                <StyledMapIcon />
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
  box-shadow: 0 0 10px 2px lightgreen;
  display: flex;
  align-items: center;

  &:focus,
  &:active {
    box-shadow: 0 0 10px 2px lightgreen;
  }

  ${({ active }) =>
    !active &&
    css`
      background-color: gray;
      color: white;
      box-shadow: none;
      opacity: 0.5;
    `};
`
const StyledGridIcon = styled(MdGridOn)`
  margin-right: 10px;
`

const StyledMapIcon = styled(MdMap)`
  margin-right: 10px;
`