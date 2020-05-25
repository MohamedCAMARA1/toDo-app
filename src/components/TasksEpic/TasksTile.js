import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const TasksTile = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.icon}
          source={require("../../../assets/check_circle.png")}
        />
        <Text style={styles.title}> {title} </Text>
      </View>
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  subContainer: {
    flexDirection: "row",
    //justifyContent: "flex-start", utilisé par défaut donc pas besoin de le mettre
    alignItems: "center",
  },
  title: {
    marginLeft: 30,
  },
});

export default TasksTile;
