import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Counter({ totalTasks }) {
  return (
    <View>
      <Text style={Styles.nb}>{totalTasks}</Text>
      <Text style={Styles.title}>Tâche créée{totalTasks > 1 ? "s" : ""} </Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "green",
  },
  nb: {
    color: "black",
    fontWeight: "bold",
  },
});
