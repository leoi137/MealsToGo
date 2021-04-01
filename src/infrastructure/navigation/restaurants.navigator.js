import React from "react";
// Instead of being tab based this will be stacked based
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

// Any components within the component field of RestaurantStack.Screen come with navigation prop.
export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.DefaultTransition }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
