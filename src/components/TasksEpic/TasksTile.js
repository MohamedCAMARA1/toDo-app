import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const TasksTile = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("../../../assets/check_circle.png")}
      />
      <Text>{title} </Text>
      <Image
        style={styles.icon}
        source={require("../../../assets/delete.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
  },
});

export default TasksTile;
