import React, { useState, useEffect } from "react";
import axios from "axios"


const TodoList = () => {
  const [getTodo, setGetTodo] = useState([]);

  const fetchUserData = async () => {
    const resp = await axios.get("/gettodo");
    console.log("data",resp.data.getTodo
    );

    // if No users are there please dont set the values
   
      setGetTodo(resp.data.getTodo);
    
  };
  useEffect(() => {
    fetchUserData()
  }, [getTodo]);

  const editTodo =async(item)=>{
    const data = prompt("Enter your new name");
    

    if (!data) {
      alert("Please Enter Name ");
    } else {
      const resp = await axios.put(`/edittodo/${item._id}`, {
         data:data
      });
      console.log("edit",resp);
    }
   
  }

  
  const deletTodo =async(item1)=>{
    const resp = await axios.delete(`/delettodo/${item1}`);
    console.log(resp);
  }

  useEffect(() => {
   if(deletTodo()){

   }
  }, []);
  
  return (
    <>

<div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
             
              <div>
              {getTodo.map((item,index) => (
                <div key={index} className="flex mb-4 items-center">
                  <p className="w-full text-grey-darkest">
                  {item.data}
                  </p>
                  <button onClick={() => editTodo(item)} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded   border-green bg-green-500 text-white hover:bg-white hover:text-green-500">
                    Edit
                  </button>
                  <button onClick={() => deletTodo(item._id)} className="flex-no-shrink p-2 ml-2 border-2 rounded  border-red  bg-red-600 text-white hover:bg-white hover:text-red-600">
                    Remove
                  </button>
                </div>
               ))}
              </div>
            </div>
          </div>



      {/* <div className="ml-[250px] mt-[100px]">
        <table className="table-fixed border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 p-4">TODO</th>
            </tr>
          </thead>

          <tbody>
            {getTodo.map((item,index) => (
              <tr key={index}>
                <td className="border border-slate-300 p-4">{item.data}</td>

                <td className="border border-slate-300 p-4">
                <HiPencilAlt 
                onClick={() => editTodo(item)}
                 />
              </td>
              <td className="border border-slate-300 p-4">
                <FaTrashAlt
                 onClick={() => deletTodo(item._id)}
                  />
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
};

export default TodoList;
