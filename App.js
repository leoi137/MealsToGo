import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}