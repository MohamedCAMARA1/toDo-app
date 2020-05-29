import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CounterCompletedTasks({ nbTasksCompleted }) {
  return (
    <View>
      <Text style={Styles.nb}>{nbTasksCompleted()}</Text>
      <Text style={Styles.title}>
        Tâche complétée{nbTasksCompleted() > 1 ? "s" : ""}{" "}
      </Text>
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
