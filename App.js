import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import Header from "./src/components/_Shared/Header";
import TasksContainer from "./src/components/TasksEpic/TasksContainer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TasksContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    marginRight: 20,
    marginLeft: 20,
  },
});
