import React, { useState } from "react";
import { motion } from "framer-motion";
const LoginDetails = () => {
  const [occion, setOpcion] = useState(0);
  return (
    <>
      {occion === 0 ? (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4 }}
          className="h-[100%]  bg-[#0B0E0B] flex justify-center items-center"
        >
          <div className="w-[90%]   md:w-[50%] lg:w-[30%]  rounded-md bg-[#181A18] p-2 border-gray-50">
            <h1 className="text-white text-center text-3xl font-bold">
              User login
            </h1>
            <form className="flex flex-col">
              <input
                placeholder="Enter Your Email"
                className="p-3  bg-[#202320] text-gray-400 outline-0 w-[95%] mx-auto my-5"
              ></input>
              <input
                placeholder="Enter Your Password  "
                className="p-3  text-gray-400  bg-[#202320] outline-0   w-[95%] mx-auto"
              ></input>
              <button className="p-3 bg-white w-[95%] mx-auto mt-5 rounded-md">
                Login
              </button>
              <p className="text-gray-400 mt-5 mx-auto font-bold">
                Rembeer Your Password
              </p>
              <a 
              onClick={()=>setOpcion(1)}
                href="#"
                className="text-amber-400 underline underline-offset-4 hover:text-amber-300 transition-colors duration-200 mx-auto"
              >
                Sign Up
              </a>
            </form>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4 }}
          className="h-[100%]  bg-[#0B0E0B] flex justify-center items-center"
        >
          <div className="w-[90%]   md:w-[50%] lg:w-[30%]   rounded-md bg-[#181A18] p-2 border-gray-50">
            <h1 className="text-white text-center text-3xl   my-5 font-bold">
              Register user
            </h1>
            <form className="flex flex-col">
              <input
                placeholder="Enter Your Email"
                className="p-3  bg-[#202320] text-gray-400 outline-0 w-[95%] mx-auto my-2"
              ></input> 
               <input
                placeholder="Enter Your Email"
                className="p-3  bg-[#202320] text-gray-400 outline-0 w-[95%] mx-auto my-2"
              ></input>
               <input
                placeholder="Enter Your Email"
                className="p-3  bg-[#202320] text-gray-400 outline-0 w-[95%] mx-auto my-3"
              ></input>
              <input
                placeholder="Enter Your Password  "
                className="p-3  text-gray-400  bg-[#202320] outline-0   w-[95%] mx-auto"
              ></input>
              <button className="p-3 bg-white w-[95%] mx-auto mt-5 rounded-md">
                Login
              </button>
              <p className="text-gray-400 mt-5 mx-auto font-bold">
                Rembeer Your Password
              </p>
              <a
               
                // href="#"
                className="text-amber-400 underline underline-offset-4 hover:text-amber-300 transition-colors duration-200 mx-auto"
                onClick={()=>console.log("migollon")}
             
             >
                Login Now
              </a>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default LoginDetails;
