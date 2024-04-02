import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// localStorage get
const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const Todolist = () => {
  const [todos, setTodos] = useState(getLocalItems());
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");
  // localStorage item
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todos));
  }, [todos]);
  // add todo js
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      const newTask = { id: Date.now(), text: newTodo };
      setTodos([...todos, newTask]);
      setNewTodo("");
      toast.success("Added");
    }
  };
  //  delete js
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    toast.error("List delete");
  };
  // edit js
  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditedText(text);
    toast.dark("List Edit");
  };
  // update js
  const handleUpdate = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingId ? { ...todo, text: editedText } : todo
    );
    setTodos(updatedTodos);
    setEditingId(null);
    setEditedText("");
    toast.info("Update Edit");
  };

  return (
    <div className="h-screen bg-blue-300 flex items-center justify-center flex-col">
      <div className="max-w-[600px] w-full flex flex-col items-center border p-10 rounded-[12px] bg-slate-600 shadow-2xl">
        <h1 className="text-red-300 text-[64px] font-bold mb-4 ">
          Todo List
        </h1>
        <div className="max-w-[600px] w-full flex flex-col items-center">
          <form onSubmit={handleAddTodo} className="flex mb-4">
            <input
              type="text"
              className="border rounded py-2 px-3 mr-2 shadow-2xl"
              placeholder="Add a task..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button className="bg-blue-500 border hover:bg-blue-600 text-black py-2 px-4 rounded">
              Add
            </button>
          </form>
          <ul className="w-full  rounded-[8px] shadow-2xl  h-[400px] overflow-auto flex flex-col gap-5 ">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center text-white justify-between p-2 border-b"
              >
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="border outline-none bg-black rounded py-1 px-2 mr-2"
                  />
                ) : (
                  <span>{todo.text}</span>
                )}

                <div>
                  <Link to={`edit/${todo.id}`}>
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
                  </Link>
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
      </div>
    </div>
  );
};

export default Todolist;
