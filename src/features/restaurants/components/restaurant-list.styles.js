import styled from "styled-components/native";
import { FlatList } from "react-native";

// This allows us to get the contentContainerStyle out of inline.
export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
