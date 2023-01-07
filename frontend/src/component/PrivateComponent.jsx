import React from "react";
import { Outlet,Navigate } from "react-router-dom";


const PrivateComponent = () => {

    const auth = localStorage.getItem("usersdatatoken")

    if(!auth){
return <Navigate to="/"/>
    }
  return (
  <Outlet/>
  )
}

export default PrivateComponent