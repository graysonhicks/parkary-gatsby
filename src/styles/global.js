import { injectGlobal } from 'styled-components'
import * as fonts from './fonts'

const globalStyles = injectGlobal`
  @font-face {
    font-family: 'Roboto Black';
    font-style: normal;
    font-weight: 900;
    src: local('Roboto Black'), url('${fonts.RobotoBlack}') format('truetype');
  }
  body {
    margin: 0;
  }
`

export default globalStyles
