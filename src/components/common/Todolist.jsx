import React, { useState } from "react";

const Todolist = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    // Add more initial tasks if needed
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newTask = { id: Date.now(), text: newTodo };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditedText(text);
  };

  const handleUpdate = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingId ? { ...todo, text: editedText } : todo
    );
    setTodos(updatedTodos);
    setEditingId(null);
    setEditedText("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border rounded py-2 px-3 mr-2"
          placeholder="Add a task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 border hover:bg-blue-600 text-black py-2 px-4 rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 border-b"
          >
            {editingId === todo.id ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="border rounded py-1 px-2 mr-2"
              />
            ) : (
              <span>{todo.text}</span>
            )}
            <div>
              {editingId === todo.id ? (
                <button
                  onClick={handleUpdate}
                  className="text-green-500 hover:text-green-600 mr-2"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo.id, todo.text)}
                  className="text-blue-500 hover:text-blue-600 mr-2"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
