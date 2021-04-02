import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";

import { Search } from "../components/search.components";

// This allows us to get the contentContainerStyle out of inline.
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = ({ navigation }) => {
  // Can use useContext given that RestaurantContextProvider (RCP) is wrapped over the whole screen
  // the RCP is the provider of the RestaurantContext
  // useContext gets the restaurant context given by the provider
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            // Note how the individual RestaurantInfoCard is rendered within the TouchableOpacity
            <TouchableOpacity
              onPress={() =>
                // "RestaurantDetail" is the path that we navigate to and restaurant is a prop with the (resturant) item
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
