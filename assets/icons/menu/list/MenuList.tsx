import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const MenuList = () => (
  <Svg fill="#FFF" width={26} height={24} viewBox="0 0 24 24">
    {/* Выровненные полоски */}
    <Path d="M4 6h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2Z" />
    <Path d="M4 12h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2Z" />
    <Path d="M4 18h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2Z" />
  </Svg>
)

export default MenuList
