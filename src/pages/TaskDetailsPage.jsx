import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpdateTaskForm from "../UpdateTaskForm";

export default function TaskDetailsPage({ todos, setTodos }) {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const selectedTask = todos.find((task) => task.id === id);
    setTask(selectedTask);
  }, [id, todos]);

  function updateTask(updatedTask) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === updatedTask.id ? { ...todo, ...updatedTask } : todo
      )
    );
  }

  if (!task) {
    return <div>Task not found!</div>;
  }

  return (
    <div>
      <h1>Task Details</h1>
      <p>{task.title}</p>
      <UpdateTaskForm task={task} onUpdate={updateTask} />
    </div>
  );
}
