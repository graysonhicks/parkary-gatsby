import React from 'react'
import styled from 'styled-components'
import { startCase } from 'lodash'

import { Label, Checkbox } from 'rebass'

import { ResultsContext } from './../context'

const FilterCheckbox = ({ name, handleClickFilter }) => {
  const formattedName = startCase(name)

  return (
    <ResultsContext.Consumer>
      {context => {
        return (
          <Label>
            <StyledCheckbox
              onClick={() => {
                handleClickFilter(name)
              }}
            />
            {formattedName}
          </Label>
        )
      }}
    </ResultsContext.Consumer>
  )
}

export default FilterCheckbox

const StyledCheckbox = styled(Checkbox)``
