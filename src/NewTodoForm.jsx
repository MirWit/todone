import { useState } from "react";

export function NewTodoForm(props) {
  props.onSubmit;
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask === "") return;

    props.onSubmit(newTask);

    setNewTask("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="task">Create New Task</label>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          id="task"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
