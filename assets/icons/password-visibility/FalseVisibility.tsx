import * as React from "react"
import Svg, {G, Path } from "react-native-svg"
import { Colors } from "@/shared/tokens"

const FalseVisibility = () => (
  <Svg viewBox="0 0 16 16" style={{width: 24, height: 24}} fill={Colors.gray}>
    <G data-name={28}>
      <Path d="M8 9a7.6 7.6 0 0 1-4.76-1.67L.19 4.89a.5.5 0 1 1 .62-.78l3.05 2.44a6.64 6.64 0 0 0 8.28 0l3-2.44a.5.5 0 1 1 .62.78l-3 2.44A7.6 7.6 0 0 1 8 9zM5.5 13a.54.54 0 0 1-.22 0 .51.51 0 0 1-.23-.67l1-2a.5.5 0 0 1 .9.44l-1 2a.5.5 0 0 1-.45.23zM10.5 13a.5.5 0 0 1-.45-.28l-1-2a.5.5 0 1 1 .9-.44l1 2a.51.51 0 0 1-.23.67.54.54 0 0 1-.22.05zM13.5 11a.47.47 0 0 1-.35-.15l-1-1a.49.49 0 0 1 .7-.7l1 1a.48.48 0 0 1 0 .7.47.47 0 0 1-.35.15zM2.5 11a.47.47 0 0 1-.35-.15.48.48 0 0 1 0-.7l1-1a.49.49 0 1 1 .7.7l-1 1a.47.47 0 0 1-.35.15z" />
    </G>
  </Svg>
)
export default FalseVisibility
