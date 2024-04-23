import "./style.css";
import { useState } from "react";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newTask, completed: false },
      ];
    });

    setNewTask("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="task">New Task</label>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            id="taks"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="listHeadline">My List</h1>
      <ul className="list">
        {todos.length === 0 && "*nothing to do*"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn delete-btn"
                >
                  delete
                </button>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
