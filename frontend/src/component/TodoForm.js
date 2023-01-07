import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const todoData = async (e) => {
    e.preventDefault();

    const res = await fetch("/value", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: todo,
      }),
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("invalid todo");
    } else {
      window.alert("todo succesfully");
    }
  };

  return (
    <>
      <section>
        <form action="" onSubmit={todoData}>
          <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
              <div className="mb-4">
                <h1 className="text-blue-600 ">Todo List</h1>
                <div className="flex mt-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    placeholder="Add Todo"
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    required
                  />
                  <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal  ">
                    Add
                  </button>
                </div>
              </div>
             
            </div>
          </div>

          {/* <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[500px] h-[150px] ml-[350px] mt-[30px]">
          <div className="flex flex-col justify-center ml-[50px]">
            <div className="flex flex-row mt-[20px]">
              <label htmlFor="" className="mt-[7px] ml-[30px]">
                Todo
              </label>
              <br />
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                required
                className="w-[200px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
              />
            </div>
          </div>
        </div>

        <button className="ml-[650px] mt-[20px] border border-indigo-600 px-2 py-1 text-white bg-indigo-600 hover:bg-white hover:text-indigo-600">
          Submit
        </button> */}
        </form>
      </section>
      <TodoList />
    </>
  );
};

export default TodoForm;
