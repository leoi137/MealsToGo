import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

// We can now put any tab in the safe area
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;