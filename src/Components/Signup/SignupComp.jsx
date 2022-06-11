import React from "react";
import pix from "../../Assets/alaksiej-carankievic-dKEFdOwY2hQ-unsplash.jpg";

const SignupComp = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className=" flex w-[900px] bg-[#5DB6BC]  rounded-lg  ">
        <div className=" md:flex-[8] ">
          <img
            src={pix}
            alt=""
            className="h-auto rounded-bl-lg rounded-tl-lg "
          />
        </div>
        <div className=" flex-[8] flex flex-col items-center p-10 ">
          {" "}
          <span className="text-3xl text-white font-serif ">
            {" "}
            Register
          </span>{" "}
          <input
            placeholder="Full Name"
            type="text"
            className="outline-none mt-10 rounded-md my-4 w-[250px] h-9 p-2"
          />
          <input
            placeholder="Email"
            type="text"
            className="outline-none rounded-md w-[250px] h-9 p-2"
          />
          <input
            placeholder="Contact No"
            type="text"
            className="outline-none rounded-md my-4 w-[250px] h-9 p-2"
          />
          <input
            placeholder="CNIC"
            type="text"
            className="outline-none rounded-md w-[250px] h-9 p-2"
          />
          <input
            placeholder="Address"
            type="text"
            className="outline-none rounded-md my-4 w-[250px] h-9 p-2"
          />
          {/* <input
            placeholder="Password"
            type="password"
            className="outline-none  rounded-md  w-[250px] h-9 p-2"
          /> */}
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
    </div>
  );
};

export default SignupComp;
