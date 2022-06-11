import React from "react";
import pic from "../../Assets/user-profile-default-computer-icons-network-video-recorder-png-favpng-7dPZA8WRdY80Uw3bdMWkEN4fR.jpg";

const DummyUsers = [
  {
    name: "Wajeeah Parwaiz",
    career: "Software Engineer",
    field: "Graphic Designer",
    experties: "UX Designer",
  },
  {
    name: "M Abrar Hussain",
    career: "Software Engineer",
    field: "MERN Stack Developer",
  },
  {
    name: "Kinza Ahmad",
    career: "Software Engineer",
    field: "App Developer",
    experties: "SR Expert",
  },
  {
    name: "Sufyan Ahmad",
    career: "Software Engineer",
    field: ".net Stack Developer",
  },
];

const AboutComp = () => {
  return (
    <div className="w-full flex justify-center items-center bg-slate-200 p-4">
      {/* Container */}
      <div className=" my-5 w-[700px] h-auto z-20 backdrop-blur-xl rounded-2xl border border-slate-300 p-4 flex flex-col items-center text-center">
        <span className=" text-2xl font-medium ">Our Mission</span>
        <span className="my-3">To remove Poverty</span>
        <span className=" text-2xl font-medium my-3">About Us</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quo
          expedita non possimus vel? Voluptatum tempora quidem natus.
        </p>

        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum
          exercitationem eveniet, pariatur dolore consequuntur quia earum dicta
          corrupti commodi hic repudiandae deserunt quibusdam blanditiis
          voluptatum nesciunt distinctio voluptates. Excepturi iusto velit dolor
          quo consectetur consequatur, perferendis impedit repellat, illo rerum
          expedita porro quas quaerat magni, officia ullam possimus minima?
          Doloribus, sequi temporibus eos ea beatae ad nemo modi aliquam
          exercitationem facilis neque amet ratione saepe consequatur ipsum a
          laborum ipsam iste repellat. Delectus dolores blanditiis minus optio
          rem libero modi quasi, mollitia error facere velit distinctio, placeat
          consequuntur. Unde quod dicta rem ad soluta asperiores est omnis optio
          quam!
        </p>

        <span className="text-2xl font-medium my-3">Our Team</span>

        <div className="flex justify-around mt-4 ">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {DummyUsers.map((usr) => (
              <div className="flex flex-col mx-3 items-center">
                <img src={pic} alt="" className="w-20 h-20 rounded-full" />
                <span className="  font-medium">{usr.name}</span>
                <span className="text-sm font-medium  "> {usr.career} </span>
                <span className="text-sm">{usr.field}</span>
                <span className="text-sm">{usr.experties}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
