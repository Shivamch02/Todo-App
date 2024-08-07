import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Todo = () => {
  const [newTodo, setNewTodo] = React.useState([]);
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");

  const handleDeleteButton = (id) => {
    console.log(id);
    let newTodos = newTodo.filter((item) => item.id !== id);
    setNewTodo(newTodos);
  };
  const handleAddButton = () => {
    if (!text) return;
    setNewTodo([
      ...newTodo,
      { id: newTodo.length + 1, title: text, desc: desc, checked: false },
    ]);
    setText("");
    setDesc("");
  };

  const handleCheckBoxChange = (id) => {
    console.log(id);
    setNewTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold bg-gray-800 text-white p-4">
        Add Your Todo
      </h2>
      <div className="bg-gray-300 px-4 py-4 flex justify-center">
        <form action="">
          <input
            className="border border-black px-3 py-3 rounded-md w-72"
            placeholder="Add Your Task!!"
            required
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            className="border border-black px-3 py-3 ml-4 rounded-md w-72"
            placeholder="Add Your Description!!"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            type="submit"
            className="px-12 py-3 bg-green-400 rounded-md ml-4"
            onClick={handleAddButton}
          >
            Add
          </button>
        </form>
      </div>
      <hr className="font-bold" />
      <div className="bg-gray-300 px-4 py-2">
        <p className="my-2 text-2xl font-semibold text-center">Todo List</p>
        <ul>
          {newTodo.length === 0 ? (
            <p className="text-center text-xl font-semibold">
              No Todo! Please Add Your Todo!!
            </p>
          ) : (
            <>
              <div className="border border-black bg-gray-200 py-2 px-4 m-2">
                {newTodo.map((todo, index) => (
                  <>
                    <li
                      key={index}
                      className="my-2 w-[100%] flex justify-between border border-b-gray-950 pb-3"
                    >
                      {newTodo[index].checked === true ? (
                        <span className="font-semibold w-[30%] h-12 pl-3 flex items-center line-through overflow-hidden">
                          {newTodo[index].title.charAt(0).toUpperCase() +
                            newTodo[index].title.slice(1)}
                        </span>
                      ) : (
                        <span className="font-semibold w-[30%] h-12 pl-3 flex items-center overflow-y-hidden">
                          {newTodo[index].title.charAt(0).toUpperCase() +
                            newTodo[index].title.slice(1, 100) +
                            "..."}
                        </span>
                      )}{" "}
                      <span className="w-[45%] px-4 flex items-center justify-start">
                        {newTodo[index].desc && "● " + newTodo[index].desc}
                      </span>
                      <button
                        className="py-2 px-4 bg-red-400 rounded-lg ml-auto w-[20%] flex justify-center items-center h-12 w-36"
                        onClick={() => handleDeleteButton(newTodo[index].id)}
                      >
                        Delete
                      </button>
                      <div className="w-[5%] flex justify-center items-center h-12">
                        <input
                          className=" px-2 h-5 w-5"
                          type="checkbox"
                          checked={newTodo[index].checked}
                          onChange={() =>
                            handleCheckBoxChange(newTodo[index].id)
                          }
                        />
                      </div>
                    </li>
                  </>
                ))}
              </div>
            </>
          )}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-600 h-20 fixed bottom-0 left-0 right-0 text-white p-2">
        <h1 className="font-bold py-2 text-black">
          Made By Shivam Chaurasiya ❤️
        </h1>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/shivam-chaurasiyaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Shivamch02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/_cvam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Todo;
