import React from 'react'
import styled from 'styled-components'

import { Label, Checkbox } from 'rebass'

import { ResultsContext } from './../context'

const FilterCheckbox = () => {
  return (
    <ResultsContext.Consumer>
      {context => {
        return (
          <Label>
            <StyledCheckbox />
            Water
          </Label>
        )
      }}
    </ResultsContext.Consumer>
  )
}

export default FilterCheckbox

const StyledCheckbox = styled(Checkbox)``
