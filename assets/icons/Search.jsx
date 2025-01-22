import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const Search = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
    <Path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinejoin="round" />
    <Path d="M9.125 14L9.125 8M11 8V6.5M11 15.5V14M9.125 11H12.875M12.875 11C13.4963 11 14 11.5037 14 12.125V12.875C14 13.4963 13.4963 14 12.875 14H8M12.875 11C13.4963 11 14 10.4963 14 9.875V9.125C14 8.50368 13.4963 8 12.875 8H8" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Search;
