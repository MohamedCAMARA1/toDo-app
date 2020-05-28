import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TasksTile = ({ id, completed, title, onChangeStatus, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onChangeStatus(id)}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image
            style={styles.icon}
            source={
              completed
                ? require("../../../assets/check_circle.png")
                : require("../../../assets/circle.png")
            }
          />
          <Text
            style={[styles.title, { color: completed ? "lightgrey" : "black" }]}
          >
            {" "}
            {title}{" "}
          </Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(id)}>
          <Image
            style={styles.icon}
            source={require("../../../assets/delete.png")}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
