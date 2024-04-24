import React from "react";
import { NewTodoForm } from "../NewTodoForm";
import { TodoList } from "../TodoList";

export default function Home({ todos, addTodo, toggleTodo, deleteTodo }) {
  return (
    <div>
      <NewTodoForm onSubmit={addTodo} />
      <h1>My List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
