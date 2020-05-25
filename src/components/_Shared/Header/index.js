import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function Header() {
  const laDate = new Date();

  const jours = [
    "Dimache",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  const mois = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>
        {" " +
          jours[laDate.getDay()] +
          " " +
          laDate.getDate() +
          " " +
          mois[laDate.getMonth()]}
      </Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    // marginBottom: Platform.OS === "android" ? 25 : 20,
    // marginTop: Platform.OS === "android" ? 25 : 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "orange",
  },
});
