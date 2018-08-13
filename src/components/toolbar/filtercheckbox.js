import React from 'react'
import styled from 'styled-components'
import { startCase } from 'lodash'

import { Label, Checkbox } from 'rebass'

import { ResultsContext } from './../context'

const FilterCheckbox = ({ name, handleClickFilter, selectedAmenities }) => {
  // Format name for display.
  const formattedName = startCase(name)
  // See if filter is in selectedAmenities
  const checked = selectedAmenities.includes(name)

  return (
    <Label>
      <StyledCheckbox
        onChange={() => {
          handleClickFilter(name)
        }}
        checked={checked}
      />
      {formattedName}
    </Label>
  )
}

export default FilterCheckbox

const StyledCheckbox = styled(Checkbox)``
