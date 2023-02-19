import React, { useState } from "react";
import TodoList from "./TodoList";
import moment from "moment"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoForm = () => {
  const [todo, setTodo] = useState("");

 // let date = moment().format();
  let id = moment().format('D-MM-YYYY hh:mm:ss');
  const todoData = async (e) => {
    e.preventDefault();

    const res = await fetch("/value", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: todo,
        time:id
      }),
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("invalid todo");
    } else {
     // window.alert("todo succesfully");
      toast.success('TODO succesfully!', {
        position: toast.POSITION.TOP_CENTER
    });
    }
  };

  return (
    <>
      <section>
        <form action="" onSubmit={todoData}>
          <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
              <div className="mb-4">
                <h1 className="text-blue-600 text-lg">Todo List</h1>
                <div className="flex mt-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    placeholder="Add Todo"
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    required
                  />
                  <button className="flex-no-shrink p-2 border-2 rounded bg-teal-400 text-white hover:bg-white hover:text-teal-400 ">
                    Add
                  </button>
                </div>
              </div>
             
            </div>
          </div>

          
        </form>
      </section>
      <TodoList />
    </>
  );
};

export default TodoForm;
