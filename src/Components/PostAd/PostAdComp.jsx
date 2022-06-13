import React from "react";

const PostAdComp = () => {
  return (
    <div className="flex justify-center items-center bg-postAd bg-cover  ">
      <div className=" w-[1000px]  bg-transparent backdrop-blur-lg shadow-2xl my-20 rounded-md p-8">
        <span className="text-2xl font-medium ">
          Enter your Credentials for Posting Ads
        </span>
        <form className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
          <div className="mr-3">
            <input
              placeholder="Applicant's Name*"
              required
              type="text"
              className="outline-none mt-10 rounded-md my-4 w-[250px] h-9 p-2"
            />
            <input
              placeholder="Applicant's Contact No.*"
              required
              type="text"
              className="outline-none  rounded-md  w-[250px] h-9 p-2"
            />{" "}
            <input
              placeholder="Applicant's Cnic No.*"
              type="text"
              className="outline-none rounded-md my-4 w-[250px] h-9 p-2"
              required
            />
            <input
              placeholder="Applicant's Home Address"
              type="text"
              className="outline-none  rounded-md  w-[250px] h-9 p-2"
            />{" "}
            <input
              placeholder="House Ownership*"
              type="text"
              required
              className="outline-none  rounded-md my-4 w-[250px] h-9 p-2"
            />
            <input
              placeholder="Applicant's Job Occupation"
              type="text"
              className="outline-none  rounded-md  w-[250px] h-9 p-2"
            />{" "}
            <input
              placeholder="Applicant's Salary"
              type="text"
              className="outline-none  rounded-md my-4 w-[250px] h-9 p-2"
            />
            <div>
              <label htmlFor="">Applicant's Cninc picture</label>
              <input
                placeholder=""
                type="file"
                className="outline-none  rounded-md  w-[250px] h-9 p-2"
              />
            </div>
          </div>
          <div className="mr-3">
            <input
              placeholder=" Guardian's Name"
              required
              type="text"
              className="outline-none mt-10 rounded-md my-4 w-[250px] h-9 p-2"
            />
            <input
              placeholder="Guardian's Contact No."
              required
              type="text"
              className="outline-none  rounded-md  w-[250px] h-9 p-2"
            />{" "}
            <input
              placeholder="Guardian's Relationship with applicant."
              type="text"
              className="outline-none rounded-md my-4 w-[250px] h-9 p-2"
              required
            />
            <input
              placeholder="Guardian's Cnic"
              type="text"
              className="outline-none  rounded-md  w-[250px] h-9 p-2"
            />{" "}
            <input
              placeholder="Guardian's Job Occupation"
              type="text"
              required
              className="outline-none  rounded-md my-4 w-[250px] h-9 p-2"
            />
            <input
              placeholder="Guardian's Salary"
              type="text"
              className="outline-none  rounded-md w-[250px] h-9 p-2"
            />
            <div className="mt-3 text-slate-500">
              <label htmlFor="" className="">
                Electricity Bill Picture
              </label>
              <input
                placeholder=""
                type="file"
                className="outline-none  rounded-md  w-[250px] h-9 p-2"
              />
            </div>
            <div className=" flex flex-col my-3">
              <label htmlFor="" className="text-slate-500">
                Delivery Date
              </label>
              <input
                placeholder="Delivery Date"
                type="date"
                className="outline-none  rounded-md w-[250px] h-9 p-2"
              />
            </div>
          </div>
          <div className="mt-10 flex flex-col mr-3 ">
            <input
              placeholder="Guardian's Salary"
              type="text"
              className="outline-none  rounded-md w-[250px] h-9 p-2"
            />
            <div className="my-3">
              <input type="checkbox" name="bed" id="bed" />
              <label htmlFor="bed" className="ml-3 text-slate-700">
                Bed set (Bed, Matress, Wardrobe)
              </label>
            </div>{" "}
            <div className="my-3">
              <input type="checkbox" name="machine" id="machine" />
              <label htmlFor="machine" className="ml-3 text-slate-700">
                Washing Machine
              </label>
            </div>{" "}
            <div className="my-3">
              <input type="checkbox" name="ref" id="ref" />
              <label htmlFor="ref" className="ml-3 text-slate-700">
                Refrigerator
              </label>
            </div>{" "}
            <div className="my-3">
              <input type="checkbox" name="cock" id="cock" />
              <label htmlFor="cock" className="ml-3 text-slate-700">
                Crockery
              </label>
            </div>{" "}
            <div className="my-3">
              <input type="checkbox" name="grinder" id="grinder" />
              <label htmlFor="grinder" className="ml-3 text-slate-700">
                Grinder
              </label>
            </div>{" "}
            <div className="my-3">
              <input type="checkbox" name="juice" id="juice" />
              <label htmlFor="juice" className="ml-3 text-slate-700">
                Juicer
              </label>
            </div>{" "}
            <div className="my-3">
              <input type="checkbox" name="iron" id="iron" />
              <label htmlFor="iron" className="ml-3 text-slate-700">
                Iron
              </label>
            </div>
          </div>
        </form>

        <button className=" w-full p-3 my-3 bg-indigo-500 rounded-md  text-white px-8 text-center">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostAdComp;
