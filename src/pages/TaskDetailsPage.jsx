import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import UpdateTaskForm from "./UpdateTaskForm";

export default function TaskDetailsPage({ todos }) {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const selectedTask = todos.find((task) => task.id === id);
    setTask(selectedTask);
  }, [id, todos]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Task Details</h1>
      {task && <p>Title: {task.title}</p>}
      {task && <p>Description: {task.description}</p>}
      {task && <p>Completed: {task.completed ? "Yes" : "No"}</p>}
      {task && <UpdateTaskForm task={task} onUpdate={onUpdate} />}
    </div>
  );
}
