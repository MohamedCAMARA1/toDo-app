import React from "react";
import { FlatList, Text } from "react-native";
import TasksTile from "./TasksTile";

const TasksList = ({ tasks }) => {
  const _renderItem = ({ item }) => <TasksTile title={item.title}></TasksTile>;

  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

export default TasksList;
