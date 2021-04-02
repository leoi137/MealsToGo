import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

// We can now put any tab in the safe area
// within this it checks whether it is Android or IOS
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
