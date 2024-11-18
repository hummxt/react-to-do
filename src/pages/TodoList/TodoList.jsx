import React from "react";
import "./TodoList.css";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todos, setTodos }) => {

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    const newTodoText = prompt("Edit your todo:", todoToEdit.todo);
  
    if (newTodoText) {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, todo: newTodoText } : todo
      );
      setTodos(updatedTodos);
    }
  };

return (
  <div className="container w-full max-h-full flex items-center justify-center">
    <div className="todoList w-full">
      <h2 className="text-3xl font-semibold mt-20 flex items-center justify-center">To-Do List</h2>
      <div className="list max-w-full flex items-center justify-center flex-col mb-30 p-20 text-cyan-800 text-rounded-md">
        <table>
          <thead>
            <tr className="text-xl">
              <th>To-Do</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="flex items-center justify-center flex-col">
            {todos.map(({ id, todo }) => (
              <tr key={id}>
                <td className="text-lg">{todo}</td>
                <td>
                  <input type="checkbox" className="transform scale-150" />
                </td>
                <td>
                  <div className="actions">
                    <button onClick={() => handleEdit(id)}><CiEdit className="text-3xl" /></button>
                    <button onClick={() => handleDelete(id)}><MdDelete className="text-3xl" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
};

export default TodoList;
