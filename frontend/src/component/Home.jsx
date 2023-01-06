import React, { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});

  const callHomePage = async () => {
    let token = localStorage.getItem("usersdatatoken");
    try {
      const res = await fetch("/home", {
        method: "GET",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": token
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUser(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callHomePage();
  }, []);
  console.log(user);
  return (
    <>
      <h1>welcome home</h1>
      <h1>{user.name}</h1>
     
    </>
  );
};

export default Home;
