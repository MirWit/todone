import React, { useState } from "react";

export default function UpdateTaskForm({ task, onUpdate }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCompletedChange = (e) => setCompleted(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...task, title, description, completed });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompletedChange}
        />
      </label>
      <button type="submit">Update Task</button>
    </form>
  );
}
