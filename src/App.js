import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";
import TodoDetail from "./components/TodoDetail/TodoDetail";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList todos={todos} setTodos={setTodos} />} />
        <Route
          path="/todo/:id"
          element={<TodoDetail todos={todos} />}
        />
      </Routes>
    </Router>
  );
}

export default App;