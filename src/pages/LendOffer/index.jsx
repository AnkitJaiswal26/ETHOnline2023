import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";
import { offers } from "../../consts";
import CustomTable from "../../components/CustomTable";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useLoanContext } from "../../context/LoanContext";

const LendOffer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const onLoad = () => {
      axios
        .get("http://localhost:5000/api/fetchTotalBorrowAmounts")
        .then((res) => {
          console.log(res.data);
          if (res.data.results) setData(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    onLoad();
  }, []);

  const { currentAccount, user } = useAuth();
  const { acceptLenderOffer } = useLoanContext();

  const handleClick = (e, ix) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/acceptLenderOffer/${data[ix].id}`)
      .then(async (res) => {
        const lender = await axios.get(
          `http://localhost:5000/api/getUserInfo/${data[ix].userid}`
        );
        await acceptLenderOffer(
          lender.accountAddress,
          currentAccount,
          lender.id,
          user.id,
          data[ix].amount,
          data[ix].interest,
          10,
          data[ix].startDate,
          data[ix].endDate,
          data[ix].collateral
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />

      <div className="flex-col">
        <Banner name="Lending Market" />
        <div className="mx-auto py-10 px-10">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Interest</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Collateral</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, ix) => (
                <tr key={ix}>
                  <td>item.amount</td>
                  <td>item.interest</td>
                  <td>item.start_date</td>
                  <td>item.end_date</td>
                  <td>item.collateral</td>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, ix)}
                      class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                    ></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LendOffer;
