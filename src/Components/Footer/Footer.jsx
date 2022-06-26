import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import instagram from "../../Assets/instagram.png";
import facebook from "../../Assets/facebook.png";
import linkedIn from "../../Assets/linkedin.png";
import gmail from "../../Assets/gmail.png";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-auto h-auto grid grid-cols-2 md:grid-cols-2 bg-slate-800 text-white p-10 py-5 ">
      <div className="flex flex-col justify-center text-xs md:text-lg">
        <span className="">
          <FontAwesomeIcon icon={faPhone} className="mr-2" /> 038273647866
        </span>
        <span className="break-words">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 " />
          shehnaiyan.business@gmail.com
        </span>
        <span></span>
      </div>
      <div className="flex flex-col items-center">
        <span className=" text-sm  md:text-lg font-bold ">Follow Us</span>
        <div className=" flex justify-between text-sm md:text-lg ">
          <img
            src={instagram}
            alt=""
            className=" w-[30px] md:w-[40px] cursor-pointer p-2"
          />
          <img
            src={facebook}
            alt=""
            className="md:w-[40px] w-[30px]  cursor-pointer p-2 "
          />
          <img
            src={linkedIn}
            alt=""
            className="md:w-[40px] w-[30px]  cursor-pointer p-2"
          />
          <img
            src={gmail}
            alt=""
            className="md:w-[40px] w-[30px]  cursor-pointer p-2"
          />
        </div>
      </div>

      {/* <ul className="flex justify-between text-bold text-lg font-sans my-5 ">
        <li className="hover:underline hover:text-slate-500 ">
          <Link to={"/postAd"}>Post Ad</Link>
        </li>{" "}
        <li className=" hover:underline hover:text-slate-500 ">
          <Link to={"/donate"}>Donate</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Footer;
