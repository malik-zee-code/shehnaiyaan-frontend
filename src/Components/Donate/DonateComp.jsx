import React from "react";

const DummyDonate = [
  {
    itemName: "Bed Set",
    totalAmount: 100000,
    DeliveryDate: "25-06-2022",
  },
  {
    itemName: "Bed Set, Washing Machine",
    totalAmount: 140000,
    DeliveryDate: "26-06-2022",
  },
  {
    itemName: "Crockery, Bed Set",
    totalAmount: 124000,
    DeliveryDate: "27-06-2022",
  },
  {
    itemName: "Refrigerator",
    totalAmount: 60000,
    DeliveryDate: "28-06-2022",
  },
];
const DonateComp = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center mt-10 mb-5">
      {/* Container */}
      <div className="w-[1100px] h-auto bg-slate-300 rounded-md p-10">
        <span className="text-3xl font-medium  ">Donate Here</span>
        <div className="w-full h-auto mt-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {DummyDonate.map((d, i) => (
            <form className=" place-self-center w-[300px] h-[300px] rounded-md bg-white flex flex-col items-center p-5 mt-9">
              <h2 className="text-2xl font-medium">Ad no {i + 1}</h2>
              <div className="flex items-center mt-6 ">
                <label htmlFor="">Items Needed: </label>
                <span className=" p-1 w-32 text-center border-2 rounded-[1rem] ml-3">
                  {d.itemName}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <label htmlFor="">Total Amount: </label>
                <span className="p-1 px-8 w-32 text-center border-2 rounded-[1rem] ml-3">
                  {d.totalAmount}
                </span>
              </div>
              <div className="flex items-center my-2">
                <label htmlFor="">Delivery Date </label>
                <span className="p-1 px-5 w-32 border-2 rounded-[1rem] ml-3">
                  {d.DeliveryDate}
                </span>
              </div>

              <button className="mt-auto bg-slate-300 px-4 py-2 w-full rounded-[1rem] hover:bg-slate-400">
                {" "}
                Donate{" "}
              </button>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonateComp;
