import React from "react";
import { StyleSheet,Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons }) {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({item})=><PokemonCard pokemon={item}/>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        padding:4
    }
})