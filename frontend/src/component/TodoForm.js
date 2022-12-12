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
        data:todo,
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
        <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[500px] h-[150px] ml-[350px] mt-[30px]">
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
        </button>
      </form>
    </section>
    <TodoList/>
    </>
  );
};

export default TodoForm;
