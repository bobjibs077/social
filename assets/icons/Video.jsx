import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

const Video = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
    <Path d="M4.5 21.5L8.5 17.5M10.5 17.5L14.5 21.5M9.5 17.5L9.5 22.5" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M2 11.875C2 9.81261 2 8.78141 3.02513 8.1407C4.05025 7.5 5.70017 7.5 9 7.5H10C13.2998 7.5 14.9497 7.5 15.9749 8.1407C17 8.78141 17 9.81261 17 11.875V13.125C17 15.1874 17 16.2186 15.9749 16.8593C14.9497 17.5 13.2998 17.5 10 17.5H9C5.70017 17.5 4.05025 17.5 3.02513 16.8593C2 16.2186 2 15.1874 2 13.125V11.875Z" stroke="currentColor" strokeWidth={props.strokeWidth} />
    <Path d="M17 10.2495L17.1259 10.174C19.2417 8.90435 20.2996 8.26954 21.1498 8.57605C22 8.88257 22 9.89876 22 11.9312V13.0685C22 15.1009 22 16.1171 21.1498 16.4236C20.2996 16.7301 19.2417 16.0953 17.1259 14.8257L17 14.7501" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" />
    <Circle cx="12.5" cy="5" r="2.5" stroke="currentColor" strokeWidth={props.strokeWidth} />
    <Circle cx="7" cy="4.5" r="3" stroke="currentColor" strokeWidth={props.strokeWidth} />
  </Svg>
);

export default Video;
