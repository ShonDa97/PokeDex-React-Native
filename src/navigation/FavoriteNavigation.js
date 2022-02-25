import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavList from "../screens/FavList";

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavList}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
}
