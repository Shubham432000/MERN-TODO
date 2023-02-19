import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditTodo = () => {
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  const { id } = useParams("");
  const getTodo = async () => {
    const res = await fetch(`/edittodo/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data1 = await res.json();
    console.log(data1.data);
    if (res.status == 422 || !data1) {
      alert("error");
    } else {
      setTodo(data1.data);
    }
  };

  useEffect(() => {
    getTodo();
  }, [id]);

  const updateTodo1 = async (e) => {
    e.preventDefault();

    const res = await fetch(`/updatetodo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo,
      }),
    });
    const resp1 = await res.json();

    if (resp1.status == 422) {
      alert("error");
    } else {
      navigate("/todo");
      alert("update succesfully");
    }
  };
  return (
    <>
      <section>
        <form action="" onSubmit={updateTodo1}>
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
                    update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditTodo;
