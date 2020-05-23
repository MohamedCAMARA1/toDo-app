import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TasksList from "./TasksList";

export default function TasksContainer(props) {
  const [tasks, setTasks] = useState([
    { title: "nouvelle tâche ici", completed: true },
  ]);

  return (
    <View>
      <TasksList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
