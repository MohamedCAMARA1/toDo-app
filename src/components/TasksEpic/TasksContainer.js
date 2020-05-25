import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";

export default function TasksContainer(props) {
  const [tasks, setTasks] = useState([
    { title: "nouvelle tâche ", completed: true },
  ]);

  return (
    <View>
      <TaskForm />
      <TasksList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
