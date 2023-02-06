import React from 'react'

const EditTodo = () => {
    const editTodo = async (item) => {
        const data = prompt("Enter your new name");
    
        if (!data) {
          alert("Please Enter Name ");
        } else {
          const resp = await axios.put(`/edittodo/${item._id}`, {
            data: data,
          });
          console.log("edit", resp);
        }
      };
  return (
    <>
      
    </>
  )
}

export default EditTodo
