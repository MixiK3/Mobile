import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const MenuClose = (props: SvgProps) => (
  <Svg
    fill={'#FFF'}
    width={26}
    height={24}
    data-name="Layer 1"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M15.854 8.854 12.708 12l3.146 3.146a.5.5 0 0 1-.708.707L12 12.707l-3.146 3.146a.498.498 0 0 1-.708 0 .5.5 0 0 1 0-.707L11.292 12 8.146 8.854a.5.5 0 0 1 .707-.707l3.146 3.146 3.146-3.146a.5.5 0 0 1 .707.707ZM24 12c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12Zm-1 0c0-6.065-4.935-11-11-11S1 5.935 1 12s4.935 11 11 11 11-4.935 11-11Z" />
  </Svg>
)
export default MenuClose
