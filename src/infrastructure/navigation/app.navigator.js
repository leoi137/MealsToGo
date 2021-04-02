import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

// Build in icons that come with expo/vector-icons
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

// Where does ({ size, color }) come from?
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);
