import React from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import instagram from "../../Assets/instagram.png";
import facebook from "../../Assets/facebook.png";
import linkedIn from "../../Assets/linkedin.png";
import gmail from "../../Assets/gmail.png";

const ContactComp = () => {
  return (
    <div className="flex justify-center items-center bg-contact bg-cover">
      <div className=" w-[1000px]  my-4 backdrop-blur-lg rounded-md p-10 shadow-xl  drop-shadow-lg">
        <div className="flex flex-col md:text-center">
          <span className="text-3xl font-medium">Contact Us</span>
          <span className=" font-medium">
            Have any Questions we'd love to hear from you
          </span>
        </div>
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className=" place-self-center ">
            <input
              placeholder="FullName"
              type="text"
              className="outline-none  rounded-md  w-[250px] h-9 p-2"
            />{" "}
            <input
              placeholder="Email"
              type="email"
              className="outline-none my-4 rounded-md  w-[250px] h-9 p-2"
            />
            <textarea
              placeholder="Message"
              className="rounded-md p-2"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="flex flex-col md:place-self-center">
            <span className="text-2xl">Quick Contact</span>
            <span className="mt-5 text-lg">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> 038273647866
            </span>
            <span className="text-lg">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              shehnaiyan.business@gmail.com
            </span>

            <span className="text-2xl mt-4">Other Ways to Contact Us</span>
            <div className=" mt-3 flex text-sm md:text-lg ">
              <img
                src={instagram}
                alt=""
                className="w-[40px] cursor-pointer p-2"
              />
              <img
                src={facebook}
                alt=""
                className="w-[40px] cursor-pointer p-2 "
              />
              <img
                src={linkedIn}
                alt=""
                className="w-[40px] cursor-pointer p-2"
              />
              <img src={gmail} alt="" className="w-[40px] cursor-pointer p-2" />
            </div>
          </div>
        </div>
        <button className=" w-full p-3 mt-4 bg-indigo-500 rounded-md  text-white px-8 text-center">
          {" "}
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactComp;
