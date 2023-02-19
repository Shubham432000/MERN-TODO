import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

const TodoList = () => {
  const [getTodo, setGetTodo] = useState([]);
  // const[time,setTime]= useState(id)

  const fetchUserData = async () => {
    const resp = await axios.get("/gettodo");
    console.log("data", resp.data.getTodo);

    // if No users are there please dont set the values
    if (resp.status == 402) {
      console.log("err");
    } else {
      setGetTodo(resp.data.getTodo);
      alert("succefully fetch data");
    }

    //setGetTodo(resp.data.getTodo);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const deletTodo = async (item1) => {
    const resp = await axios.delete(`/delettodo/${item1}`);
    // toast.success("Delete Success !", {
    //   position: toast.POSITION.TOP_CENTER,
    // });
    console.log(resp);
    if (resp.status == 402) {
      console.log("error");
    } else {
      fetchUserData();
      toast.success("Delete Success !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-full lg:max-w-lg">
          <div>
            {getTodo.map((item, index) => (
              <div key={index} className="flex mb-4 items-center">
                <p className="w-full text-grey-darkest text-xl">{item.data}</p>
                <p>{item.time}</p>
                
                <NavLink
                  to={`/edittodo/${item._id}`}
                  className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded   border-green bg-green-500 text-white hover:bg-white hover:text-green-500"
                >
                  Edit
                </NavLink>
                <button
                  onClick={() => deletTodo(item._id)}
                  className="flex-no-shrink p-2 ml-2 border-2 rounded  border-red  bg-red-600 text-white hover:bg-white hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </>
  );
};

export default TodoList;
