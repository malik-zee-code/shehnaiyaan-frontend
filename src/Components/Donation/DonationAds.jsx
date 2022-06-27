import axios from "axios";
import FsLightbox from "fslightbox-react";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { toast } from "react-toastify";

const DonationAds = () => {
  const [donations, setDonations] = useState();
  const [toggler, setToggler] = useState();
  const [isLoading, setIsLoading] = useState();
  const token = localStorage.getItem("token");
  const fetchData = useCallback(() => {
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/v1/donation`, config)
      .then((data) => {
        setDonations(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  const approveDonationHandler = (donationId, adId, donationAmount) => {
    setIsLoading(true);
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/v1/donation/${donationId}`,
        {},
        config
      )
      .then((data) => console.log("Donation Accepted = true", data.data))
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });

    const data = {
      donation: donationAmount,
    };

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/v1/ad/approveDonation/${adId}`,
        data,
        config
      )
      .then((data) => {
        setIsLoading(false);
        console.log("Donation approved", data.data);
        toast.success("Successfully Approved", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex justify-center p-10">
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full bg-slate-600">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Donation Amount</th>
              <th>Total Amount</th>
              <th>Remaining Amount</th>
              <th>Donation Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {donations?.length > 0 ? (
              donations?.map((donation, i) => (
                <>
                  {!donation.acceptance && (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{donation.donationAmount}</td>
                      <td>{donation.ad.totalAmount}</td>
                      <td>
                        {donation.ad.totalAmount - donation.donationAmount}
                      </td>
                      <td>{donation.date.slice(0, 10)}</td>
                      <th>
                        <label
                          htmlFor="my-modal-5"
                          className="btn btn-ghost btn-xs"
                          // onClick={detailBtnHandler.bind(null, ad._id)}
                        >
                          details
                        </label>

                        {/* <!-- Put this part before </body> tag --> */}
                        <input
                          type="checkbox"
                          id="my-modal-5"
                          className="modal-toggle"
                        />
                        <div className="modal ">
                          <div className="modal-box w-4/6 max-w-5xl min-h-4/6 bg-white ">
                            <div className="flex flex-col w-full h-full items-center">
                              <h1 className="font-bold text-3xl text-slate-800">
                                {" "}
                                Doantion Verification:
                              </h1>
                              <br />

                              <div className=" mt-10 flex flex-col font-medium text-xl text-slate-600">
                                <span>
                                  Total Amount : {donation.ad.totalAmount}
                                </span>
                                <span>
                                  Donation Amount : {donation.donationAmount}
                                </span>
                                <span>
                                  Remaining Amount :{" "}
                                  {donation.ad.totalAmount -
                                    donation.donationAmount}
                                </span>

                                <img
                                  src={donation.donationProof}
                                  alt=""
                                  className="mt-3 w-[200px] h-[200px] my-5 text-center"
                                  onClick={() => setToggler(!toggler)}
                                />
                                <FsLightbox
                                  toggler={toggler}
                                  sources={[donation?.donationProof]}
                                  key={i}
                                />
                              </div>

                              <div className="modal-action mt-auto">
                                <label
                                  htmlFor="my-modal-5"
                                  className="btn btn-error text-white"
                                >
                                  Close
                                </label>
                                <label
                                  className={`btn ${
                                    isLoading && "loading"
                                  } text-white`}
                                  onClick={approveDonationHandler.bind(
                                    null,
                                    donation._id,
                                    donation.ad._id,
                                    donation.donationAmount
                                  )}
                                >
                                  {isLoading ? "Approving" : "Approve Donation"}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                    </tr>
                  )}
                </>
              ))
            ) : (
              <div className="w-full flex justify-center">
                <span className="">No Pending Donations</span>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationAds;
