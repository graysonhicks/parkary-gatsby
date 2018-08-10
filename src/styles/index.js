import { injectGlobal } from 'styled-components'

const globalStyles = injectGlobal`
  * { 
    box-sizing: border-box; 
  }
  
  body {
    margin: 0;
    overflow: hidden;
  }
`

export default globalStyles
