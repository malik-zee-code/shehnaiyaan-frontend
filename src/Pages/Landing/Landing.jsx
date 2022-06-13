import React from "react";
import LandingComp from "../../Components/Landing/Landing";
// import Home from "../../Background/Home(b.g).png";

const Landing = () => {
  return (
    <div className=" w-full h-full overflow-x-hidden">
      {" "}
      {/* <img
        src={Home}
        alt=""
        className=" z-[-1] absolute bg-contain left-0 top-0 w-full h-auto "
      /> */}
      <LandingComp />
    </div>
  );
};

export default Landing;
