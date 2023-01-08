import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const navigate = useNavigate();
  let auth = localStorage.getItem("usersdatatoken");

  const logOut = () => {
    localStorage.clear();
    toast("Default Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/");
  };
  return (
    <>
      {auth ? (
        <header className="text-gray-600 body-font bg-red-400 bg-blue-500">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">TODO</span>

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:bg-blue-700 text-white text-xl p-2 rounded-lg">
                <Link to="/home">Home</Link>
              </a>
              <a className="mr-5 hover:bg-blue-700 text-white text-xl p-2 rounded-lg">
                <Link to="/todo">ToDo</Link>
              </a>
              <a className="mr-5 hover:bg-blue-700 text-white text-xl p-2 rounded-lg">
                <Link onClick={() => logOut()} to="/">
                  Logout
                </Link>
              </a>
            </nav>
          </div>
        </header>
      ) : (
        <header className="text-gray-600 body-font bg-blue-500">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">TODO</span>

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:bg-blue-700 text-white text-xl p-2 rounded-lg">
                <Link to="/">Sign Up</Link>
              </a>
              <a className="mr-5 hover:bg-blue-700 text-white text-xl p-2 rounded-lg">
                <Link to="/login">Login</Link>
              </a>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
