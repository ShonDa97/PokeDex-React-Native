import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonByIdApi } from "../api/pokemon";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import Head from "../components/pokemon/Head";
import Type from "../components/pokemon/Type";
import Stats from "../components/pokemon/Stats";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonByIdApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  useEffect(() => {
    navigation.setOptions({
      headerRigth: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  if (!pokemon) return null;
  return (
    <ScrollView>
      <Head
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
