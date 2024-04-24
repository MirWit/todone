import React from "react";
import { NewTodoForm } from "../NewTodoForm";
import { TodoList } from "../TodoList";

export default function Home({ todos, addTodo, toggleTodo, deleteTodo }) {
  return (
    <div>
      <h1>My List</h1>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
