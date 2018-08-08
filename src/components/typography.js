import styled from 'styled-components'
import { Text, colors } from 'evergreen-ui'

const Brand = styled(Text)`
  color: ${colors.white[500]};
  font-size: 1.5rem;
`

const DarkBrand = Brand.extend`
  color: ${colors.green['1000']};
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
