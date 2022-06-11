import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggler, setToggler] = useState();
  return (
    <div className="w-full h-auto bg-white ">
      <div className="flex justify-around items-center p-4">
        <div className="text-2xl font-medium">LOGO</div>
        <div className="sm:flex hidden ">
          <ul className="flex justify-between text-bold text-lg font-sans ">
            <li className="mx-5">
              <Link to={"/home"}>Home</Link>
            </li>
            <li className="mx-5">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="mx-5">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className=" sm:flex hidden ">
          <Link
            to={"/login"}
            className=" text-center mx-3 p-3 bg-indigo-500 rounded-tl-[18px] rounded-br-[18px] text-white px-8"
          >
            LOGIN
          </Link>
          <Link
            to={"/register"}
            className=" text-center px-8 p-3 bg-indigo-500 text-white rounded-tl-[18px] rounded-br-[18px] "
          >
            REGISTER
          </Link>
        </div>

        <div className=" sm:hidden ml-auto mr-3">
          <span
            className="text-2xl cursor-pointer"
            onClick={() => setToggler(!toggler)}
          >
            <FontAwesomeIcon icon={faBars} className="" />
          </span>
        </div>
      </div>

      {toggler && (
        <div className="h-auto  ">
          <ul className=" w-full flex flex-col justify-between text-bold text-lg font-sans ">
            <li className="mx-5 my-5 border-b-2 pb-2 ">
              <Link to={"/home"}>Home</Link>
            </li>
            <li className="mx-5 my-5 border-b-2 pb-2 ">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="mx-5 my-5 border-b-2 pb-2 ">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          <div className="flex flex-col p-4 mr-4 ">
            <Link
              to={"/login"}
              className=" p-3 my-3 bg-indigo-500 rounded-md  text-white px-8 text-center"
            >
              LOGIN
            </Link>
            <Link
              to={"/register"}
              className="px-8 p-3 bg-indigo-500 rounded-md text-white text-center  "
            >
              REGISTER
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
