import React from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons, loadPokemons, isNext }) {
  const loadMore = () => {
    loadPokemons();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator size="large" style={styles.spinner}  color="#000"/>
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    padding: 4,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
