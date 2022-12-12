import React, { useState } from "react";

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
        } else {
          window.alert(" registeration succesfull");
         console.log(" registeration succesfull");
    
           navigate("/login");
        }
      }

    
  return (
    <section>
      <form action="" onSubmit={submitData}>
        <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[700px] h-[450px] ml-[350px] mt-[30px]">
          <div className="flex flex-col justify-center ml-[50px]">
            <div className="flex flex-row mt-[20px]">
              <label htmlFor="" className="mt-[7px]">
                 Name:
              </label>
              <br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-[200px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
              />
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
              <label htmlFor="" className="mt-[7px] ">
                confirm password
              </label>
              <input
                type="password"
                value={cpassword}
                onChange={(e) => setconfPassword(e.target.value)}
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
