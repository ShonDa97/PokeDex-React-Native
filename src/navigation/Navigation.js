import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavList from "../screens/FavList";
import Pokedex from "../screens/Pokedex";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Pokedex" component={Pokedex} />
      <Tab.Screen name="Favorite" component={FavList} />
    </Tab.Navigator>
  );
}
