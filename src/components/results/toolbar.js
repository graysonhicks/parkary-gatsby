import React from 'react'
import styled, { css } from 'styled-components'

import Link from 'gatsby-link'

import Img from 'gatsby-image'
import { Container, Group, Button } from 'rebass'

import { ResultsContext } from './../context'

const Toolbar = () => {
  return (
    <ResultsContext.Consumer>
      {({ view, changeView }) => {
        return (
          <Item>
            <Group>
              <ToggleButton active={view.grid} onClick={changeView}>
                Grid
              </ToggleButton>
              <ToggleButton active={view.map} onClick={changeView}>
                Map
              </ToggleButton>
            </Group>
          </Item>
        )
      }}
    </ResultsContext.Consumer>
  )
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
