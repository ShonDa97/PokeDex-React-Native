import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDetailPokemonByUrlApi, getPokemonsApi } from "../api/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);
  useEffect(() => {
    (async () => {
      loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getDetailPokemonByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name:pokemonDetails.name,
          type:pokemonDetails.types[0].type.name,
          order:pokemonDetails.order,
          image:pokemonDetails.sprites.other['official-artwork'].front_default
        });
      }
      setPokemons([...pokemons,...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
