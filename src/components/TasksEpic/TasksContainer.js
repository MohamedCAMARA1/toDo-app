import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";
import CounterContainer from "./CounterContainer";
import FloatingButton from "../_Shared/floatingButton";

export default function TasksContainer(props) {
  const [tasks, setTasks] = useState([
    { id: new Date().getTime(), title: "nouvelle tâche ", completed: false },
  ]);

  const [isFormOpened, setIsFormOpened] = useState(false);

  onAddTask = (title) => {
    const newTask = {
      id: new Date().getTime(),
      title: title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const onChangeStatus = (id) => {
    let newTasks = [];
    tasks.forEach((task) => {
      if (task.id == id) {
        newTasks.push({
          id: id,
          title: task.title,
          completed: !task.completed,
        });
      } else {
        newTasks.push(task);
      }
    });

    setTasks(newTasks);
  };

  const onDelete = (id) => {
    let newTasks = [];
    tasks.forEach((task) => {
      if (task.id !== id) {
        newTasks.push(task);
      }
    });

    setTasks(newTasks);
  };

  const getTasksCompleted = () => {
    let counter = 0;
    tasks.forEach((task) => {
      if (task.completed) {
        counter++;
      }
    });

    return counter;
  };

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  };

  return (
    <View style={styles.container}>
      {isFormOpened && <TaskForm onAddTask={onAddTask} />}
      <CounterContainer
        totalTasks={tasks.length}
        nbTasksCompleted={() => getTasksCompleted()}
      />
      <TasksList
        tasks={tasks}
        onChangeStatus={onChangeStatus}
        onDelete={onDelete}
      />

      <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
