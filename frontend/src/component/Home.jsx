import React, { useEffect } from "react";
import { useState } from "react";
import { ReactComponent as YourSvg } from "../image/Avtar.svg";

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
<div className="flex justify-center">
  <YourSvg/>
</div>
    <div className="flex justify-center">
      <h1>welcome {user.name}</h1>
      
     </div>
    </>
  );
};

export default Home;
