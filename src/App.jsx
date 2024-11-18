import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoAdd from "./pages/TodoAdd/TodoAdd";
import TodoList from "./pages/TodoList/TodoList";
import { useState, useEffect } from "react";

function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [{ id: 0, todo: "universiteti partlat" }];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TodoList todos={todos} setTodos={setTodos} />} />
          <Route path="/todoadd" element={<TodoAdd todos={todos} setTodos={setTodos} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
