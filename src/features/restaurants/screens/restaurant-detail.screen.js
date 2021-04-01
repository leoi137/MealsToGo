import React, { useState } from "react";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { ScrollView } from "react-native";

// Route is a component of RestaurantStack.Screen
export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menu">
          <List.Accordion
            title="Breakfast"
            left={(props) => (
              <List.Icon
                {...props}
                icon="bread-slice"
                expanded={breakfastExpanded}
                onPress={() => setBreakfastExpanded(!breakfastExpanded)}
              />
            )}
          >
            <List.Item title="Eggs" />
            <List.Item title="Classic" />
            <List.Item title="Cereal" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => (
              <List.Icon
                {...props}
                icon="hamburger"
                expanded={lunchExpanded}
                onPress={() => setLunchExpanded(!lunchExpanded)}
              />
            )}
          >
            <List.Item title="Pizza" />
            <List.Item title="Rolls" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => (
              <List.Icon
                {...props}
                icon="food-variant"
                expanded={dinnerExpanded}
                onPress={() => setDinnerExpanded(!dinnerExpanded)}
              />
            )}
          >
            <List.Item title="Quinoa" />
            <List.Item title="Fries" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => (
              <List.Icon
                {...props}
                icon="cup"
                expanded={drinksExpanded}
                onPress={() => setDrinksExpanded(!drinksExpanded)}
              />
            )}
          >
            <List.Item title="Juice" />
            <List.Item title="Soda" />
            <List.Item title="Tea" />
            <List.Item title="Coffee" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
