import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import UpdateTaskForm from "./UpdateTaskForm";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("TASKS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
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
    <Router>
      <div>
        <Navbar className="navbar" />
        <Sidebar className="sidebar" />
        <main className="mainContainer">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  todos={todos}
                  addTodo={addTodo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              }
            />

            <Route
              path="/details/:id"
              element={<TaskDetailsPage todos={todos} onUpdate={updateTask} />}
            />

            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/update/:id"
              element={<UpdateTaskForm todos={todos} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
