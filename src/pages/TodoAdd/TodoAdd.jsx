import React, { useState } from "react";
import "./TodoAdd.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoAdd = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, { id: todos, todo: newTodo }]);
  };

  const notify = () => toast("To-Do task added to list succesfully!");

  return (
    <div className="container w-full max-h-full flex items-center justify-center">
      <div className="todoAdd w-full max-h-full">
        <form className="flex items-center justify-center" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-semibold mb-20">To-Do Add</h2>
          <input
            type="text"
            placeholder="Add your to do..."
            className="p-4 w-80 bg-cyan-800 text-white text-xl outline-none rounded-md"
            id="inp"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            required
          />
          <button type="submit" className="p-3 bg-cyan-800 text-white rounded-md" onClick={notify}>
            Add To-Do
            <ToastContainer />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoAdd;
