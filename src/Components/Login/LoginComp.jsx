import React from "react";

const LoginComp = () => {
  return (
    <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2">
      <div className=" place-self-center">
        <img src="" alt="" />
      </div>
      <div className="place-self-left w-[500px] h-[500px] bg-[#E6EFF8] rounded-lg p-10 flex flex-col items-center ">
        <span className=" text-3xl font-medium font-mono ">Login</span>
        <input
          placeholder="Username"
          type="text"
          className="outline-none mt-10 rounded-md my-4 w-[250px] h-9 p-2"
        />
        <input
          placeholder="Password"
          type="password"
          className="outline-none  rounded-md  w-[250px] h-9 p-2"
        />

        <a href="#" className="mt-10 text-indigo-400">
          {" "}
          Forgot Password ?
        </a>

        <div className="flex flex-col items-center mt-2 ">
          <button className=" w-full p-3 my-3 bg-indigo-500 rounded-md  text-white px-8 text-center">
            Login as Donor
          </button>
          <span>OR</span>
          <button className=" w-full p-3 my-3 bg-indigo-500 rounded-md  text-white px-8 text-center">
            {" "}
            Login as Acceptor
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
