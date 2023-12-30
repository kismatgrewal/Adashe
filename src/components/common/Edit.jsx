import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Edit() {
  const [note, setNote] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem("lists"));
    if (localdata) {
      const output = localdata.find((item) => item.id == id);
      setNote(output.text);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const localdata = JSON.parse(localStorage.getItem("lists"));
    const newArray = localdata.map((item) =>
      item.id == id ? { ...item, text: note } : item
    );
    localStorage.setItem("lists", JSON.stringify(newArray));
    toast.success("list edits");
  };

  return (
    <div className="h-screen flex justify-center items-center relative bg-black">
      <button
        className="w-[120px] h-[40px] bg-cyan-400 font-semibold absolute top-[300px] right-[400px] text-black rounded-[8px]"
        onClick={() => navigate(-1)}
      >
        save
      </button>
      <form className="flex mb-4" onSubmit={handleSubmit}>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          type="text"
          className="border rounded py-2 px-3 mr-2 shadow-2xl"
          placeholder="Add a task..."
        />
        <button className="bg-blue-500 border hover:bg-blue-600 text-black py-2 px-4 rounded">
          Add
        </button>
      </form>
    </div>
  );
}

export default Edit;
