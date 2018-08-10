import { injectGlobal } from 'styled-components'

const globalStyles = injectGlobal`
  * { 
    box-sizing: border-box; 
  }
  
  body {
    margin: 0;
  }
`

export default globalStyles
