import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginData = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json()

    if(res.status === 400 || !data){
      window.alert("invalid crendiential")
    }else{
      window.alert("Login succesfully")
      navigate("/home")
    }
  };

  return (
    <section>
      <form action="" onSubmit={loginData}>
        <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[700px] h-[450px] ml-[350px] mt-[30px]">
          <div className="flex flex-col justify-center ml-[50px]">
            <div className="flex flex-row mt-[20px]">
              <label htmlFor="" className="mt-[7px] ml-[30px]">
                Email
              </label>
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-[200px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
              />
            </div>
            <div className="flex flex-col mt-[20px]">
              <label htmlFor="" className="mt-[7px]">
                password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-[500px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
              />
            </div>
          </div>
        </div>

        <button className="ml-[650px] mt-[20px] border border-indigo-600 px-2 py-1 text-white bg-indigo-600 hover:bg-white hover:text-indigo-600">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Login;
