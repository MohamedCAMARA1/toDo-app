import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import Header from "./src/components/_Shared/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
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
