import React from "react";

const DonationAds = () => {
  return (
    <div className="flex justify-center p-10">
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full bg-slate-600">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Applicant Name</th>
              <th>Items Required</th>
              <th>Total Amount</th>
              <th>Remaining Amount</th>
              <th>Delivery Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {/* {ads?.length > 0
              ? ads?.map((ad, i) => ( */}
            <tr>
              <th>1</th>
              <td></td>
              <td>
                {/* {ad.itemsNeeded.length > 1
                  ? `${ad.itemsNeeded[0]}, ...`
                  : ad.itemsNeeded[0]} */}
              </td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  // onClick={detailBtnHandler.bind(null, ad._id)}
                >
                  details
                </button>
              </th>
            </tr>
            {/* ))
              : " No Data to Show"} */}
            {/* <!-- row 2 --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationAds;
