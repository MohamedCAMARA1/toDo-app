import React from "react";
import { FlatList, Text } from "react-native";
import TasksTile from "./TasksTile";

const TasksList = ({ tasks, onChangeStatus, onDelete }) => {
  const _renderItem = ({ item }) => (
    <TasksTile
      id={item.id}
      title={item.title}
      completed={item.completed}
      onChangeStatus={onChangeStatus}
      onDelete={onDelete}
    ></TasksTile>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TasksList;
