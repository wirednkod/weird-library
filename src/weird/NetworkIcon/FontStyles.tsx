import { createGlobalStyle } from "styled-components"
import Web3Font from "./fonts/Web3-Regular.woff"
import Web3Font2 from "./fonts/Web3-Regular.woff2"
import Web3FontOtf from "./fonts/Web3-Regular.otf"

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Web3-Regular';
  src: url(${Web3Font}) format('woff'),
      url(${Web3Font2}) format('woff2'),
      url(${Web3FontOtf}) format('otf'),
      url(${Web3Font}) format('woff');
}
`

export default FontStyles
