import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavList from "../screens/FavList";
import Pokedex from "../screens/Pokedex";
import Account from "../screens/Account";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "MiCuenta",
          tabBarIcon: ({ size, color }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavList}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ size, color }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball(params) {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top:-15 }}
    />
  );
}
