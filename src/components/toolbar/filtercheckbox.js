import React from 'react'
import styled from 'styled-components'
import { startCase } from 'lodash'

import { Label, Checkbox } from 'rebass'

const FilterCheckbox = ({ name, handleClickFilter, selectedAmenities }) => {
  // Format name for display.
  const formattedName = startCase(name)
  // See if filter is in selectedAmenities
  const checked = selectedAmenities.includes(name)

  return (
    <StyledLabel>
      <StyledCheckbox
        onChange={() => {
          handleClickFilter(name)
        }}
        checked={checked}
      />
      {formattedName}
    </StyledLabel>
  )
}

export default FilterCheckbox

const StyledLabel = styled(Label)`
  width: 25%;
  margin-bottom: 10px;
`

const StyledCheckbox = styled(Checkbox)`
  margin-left: 10px;
`
