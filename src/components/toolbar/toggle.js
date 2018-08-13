import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { MdGridOn, MdMap } from 'react-icons/md'
import { Button } from 'rebass'

import { ResultsContext } from './../context'

class Toggle extends Component {
  render() {
    return (
      <ResultsContext.Consumer>
        {({ view }) => {
          return (
            <>
              <ToggleButton
                onClick={this.props.toggleToGrid}
                active={view === 'grid' ? 1 : 0}
              >
                <StyledGridIcon />
                Grid
              </ToggleButton>
              <ToggleButton
                onClick={this.props.toggleToMap}
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
