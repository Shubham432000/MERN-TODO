import React, { useState } from "react";
import { ReactComponent as YourSvg } from "../image/Signup.svg";
import {  useNavigate } from "react-router-dom";
const Signup = () => {

 
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setconfPassword] = useState("");
 

 const submitData = async(e)=>{
e.preventDefault()
  const res = await fetch("/register", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             name,
             email,
             password,
             cpassword,
           }),
         });
         const data = await res.json();
         if (res.status === 402 || !data) {
         window.alert("invalid registeration");
           console.log("invalid registeration");
        }else if(password !== cpassword){
          window.alert("password are not same");
          console.log("password are not same");
        } else {
          window.alert(" registeration succesfull");
         console.log(" registeration succesfull");
    
           navigate("/login");
        }
      }

    
  return (
   <>
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24  flex flex-wrap items-center">
          <div className="svg-container md:pr-16   lg:pr-0 pr-0 w-1/2 sm:w-1/2 md:w-1/2 xl:w-1/2 lg:w-1/2 ">
            {/* md:pr-16 lg:w-1/2 md:w-1/2*/}
            <YourSvg />
          </div>

          <div className="xl:w-1/3 lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <form action="" onSubmit={submitData}>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                 Confirm Password
                </label>
                <input
                  value={cpassword}
                  onChange={(e) => setconfPassword(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
   </>
  );
};

export default Signup;















// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cpassword, setconfPassword] = useState("");

//   console.log(name, email, password);
//   const navigate = useNavigate();

//   const sigupData = async (e) => {
//     e.preventDefault();

//     const res = await fetch("/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         password,
//         cpassword,
//       }),
//     });
//     const data = await res.json();
//     if (res.status === 402 || !data) {
//       window.alert("invalid registeration");
//       console.log("invalid registeration");
//     } else {
//       window.alert(" registeration succesfull");
//       console.log(" registeration succesfull");

//       navigate("/login");
//     }
//   };
//   return (
//     <>
//       <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 ml-[500px] mt-[50px]">
//         <div className="mb-8 text-center">
//           <h1 className="my-3 text-4xl font-bold text-violet-700">Sign Up</h1>
//           <p className="text-sm dark:text-gray-400">
//             Sign up to access your account
//           </p>
//         </div>
//         <form
//           className="space-y-12 ng-untouched ng-pristine ng-valid"
//           onSubmit={sigupData}
//         >
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block mb-2 text-sm">
//                 Name
//               </label>
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 type="name"
//                 name="name"
//                 id="name"
//                 placeholder="xyz"
//                 className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block mb-2 text-sm">
//                 Email address
//               </label>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="leroy@jenkins.com"
//                 className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
//               />
//             </div>
//             <div>
//               <div className="flex justify-between mb-2">
//                 <label htmlFor="password" className="text-sm">
//                   Password
//                 </label>
//               </div>
//               <input
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="*****"
//                 className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
//               />
//             </div>
//             <div>
//               <div className="flex justify-between mb-2">
//                 <label htmlFor="password" className="text-sm">
//                   confirm Password
//                 </label>
//               </div>
//               <input
//                 value={cpassword}
//                 onChange={(e) => setconfPassword(e.target.value)}
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="*****"
//                 className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
//               />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <div>
//               <button
//                 type="button"
//                 className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900 bg-violet-700 text-white"
//               >
//                 Sign in
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Signup;
