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
  h1, h2, h3, h4, p, label {
    margin: 0;
  }
  form {
    p {
      color: rgba(255, 255, 255, 0.6);
      margin-top: 8px;
      margin-bottom: -10px;
      margin-left: 12px;
      font-size: 14px;
    }
    p::before {
      display: inline;
      content: "⚠ ";
    }
  }
`
