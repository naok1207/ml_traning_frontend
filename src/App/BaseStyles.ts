import { createGlobalStyle } from 'styled-components'
import { color } from '../shared/styles/color'

export default createGlobalStyle`
  body {
    height: 100vh;
    color: ${color.primary};
    background-color: ${color.backgroundDarkPrimary};
  }
  #root {
    height: 100%;
  }
  h1, h2, h3, h4, p {
    margin: 0;
  }
`
