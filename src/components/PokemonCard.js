import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import React from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { useNavigation } from "@react-navigation/native";

export default function PokemonCard({ pokemon }) {
  const navigation = useNavigation()

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemonInfo = () => {
    navigation.navigate("Pokemon",{id:pokemon.id})
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemonInfo}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Image style={styles.image} source={{ uri: pokemon.image }} />
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}{" "}
            </Text>
            <Text style={styles.name}>{pokemon.name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    textTransform: "capitalize",
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
});
