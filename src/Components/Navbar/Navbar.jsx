import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/NavBarLogoTrans.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// import drop from "../../Assets/DropDown-purple.png";

const Navbar = () => {
  const [toggler, setToggler] = useState();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/home", { replace: true });
    toast.success("👋 Good Bye!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="w-full h-auto bg-white shadow-md z-20">
      <div className="flex justify-between items-center  p-4 md:p-0">
        <Link className=" font-medium" to={"/home"}>
          {" "}
          <img src={logo} alt="" className="w-[180px] " />{" "}
        </Link>

        {!token ? (
          <div className=" sm:flex hidden  ">
            <Link
              to={"/login"}
              className=" flex text-center mx-3 p-3 bg-indigo-500 hover:bg-indigo-400 rounded-tl-[18px] rounded-br-[18px] text-white px-8"
            >
              LOGIN
              {/* <img src={drop} alt="" className=" ml-7 w-[18px] h-[18px]" /> */}
            </Link>
            <Link
              to={"/register"}
              className=" flex mr-10 text-center px-8 p-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-tl-[18px] rounded-br-[18px] "
            >
              REGISTER
            </Link>
          </div>
        ) : (
          <>
            <div className="sm:flex hidden ">
              <ul className="flex justify-between text-bold text-lg font-sans ">
                <li className="mx-5 hover:underline hover:text-slate-500 text-slate-700 ">
                  <Link to={"/home"}>Home</Link>
                </li>
                <li className="mx-5  hover:underline hover:text-slate-500 text-slate-700">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="mx-5  hover:underline hover:text-slate-500 text-slate-700">
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className=" sm:flex hidden  ">
              <button
                onClick={logoutHandler}
                className="mr-10 flex text-center mx-3 p-3 bg-blue-900 hover:bg-indigo-800 rounded-tl-[18px] rounded-br-[18px] text-white px-8"
              >
                LOGOUT
              </button>
            </div>
          </>
        )}

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
          {!token ? (
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
          ) : (
            <>
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
                <button
                  onClick={logoutHandler}
                  className=" p-3 my-3 bg-indigo-500 rounded-md  text-white px-8 text-center"
                >
                  LOGOUT
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
