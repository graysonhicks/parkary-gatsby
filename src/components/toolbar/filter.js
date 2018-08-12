import React, { Component } from 'react'
import styled from 'styled-components'

import { Button } from 'rebass'

class FilterMenu extends Component {
  render() {
    return <FilterButton>Filter</FilterButton>
  }
}

export default FilterMenu

const FilterButton = styled(Button)`
  color: white;
  border: 2px solid blue;
  margin-left: 10px;
`
