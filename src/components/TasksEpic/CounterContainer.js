import React from "react";
import { View, StyleSheet } from "react-native";
import CounterTasks from "../_Shared/counter/CounterTasks";
import CounterCompletedTasks from "../_Shared/counter/CounterCompletedTasks";

export default function CounterContainer({ totalTasks, nbTasksCompleted }) {
  return (
    <View style={Styles.container}>
      <CounterTasks totalTasks={totalTasks} />
      <CounterCompletedTasks nbTasksCompleted={nbTasksCompleted} />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingTop: 20,
  },
  title: {
    fontWeight: "bold",
  },
});
