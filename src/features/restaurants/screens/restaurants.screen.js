import React from "react";
import { StatusBar, StyleSheet, Text, View, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurnt-info.component";

const isAndroid = Platform.OS === "android";

export const RestaurantScreen = () => (
  <View style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // This below checks whether we are on android or IOS and then adjusts the container to the platform
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
    backgroundColor: "#fff",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
