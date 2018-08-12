import React from 'react'
import styled from 'styled-components'

import { Label, Checkbox } from 'rebass'

const FilterCheckbox = () => {
  return (
    <Label>
      <StyledCheckbox />
      Water
    </Label>
  )
}

export default FilterCheckbox

const StyledCheckbox = styled(Checkbox)``
