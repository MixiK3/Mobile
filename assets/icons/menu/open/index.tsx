import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const MenuIcon = (props: SvgProps) => (
  <Svg
    width={26}
    height={24}
    data-name="Layer 1"
    viewBox="0 0 24 24"
    {...props}
    fill="#FFF"
  >
    <Path d="M19 4H0V3h19v1ZM0 20h19v-1H0v1Zm5-9v1h19v-1H5Z" />
  </Svg>
)
export default MenuIcon
