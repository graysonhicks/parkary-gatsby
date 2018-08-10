import styled from 'styled-components'
import { Text } from 'rebass'

const Brand = styled(Text)`
  color: white;
  font-size: 1.5rem;
`

const DarkBrand = Brand.extend`
  color: teal;
`

const Heavy = Brand.extend`
  font-family: 'Roboto Black';
`

const Light = Brand.extend`
  font-family: 'Roboto Light';
`

const DarkHeavy = DarkBrand.extend`
  font-family: 'Roboto Black';
`

const DarkLight = DarkBrand.extend`
  font-family: 'Roboto Light';
`

export { Brand, Heavy, Light, DarkHeavy, DarkLight }
