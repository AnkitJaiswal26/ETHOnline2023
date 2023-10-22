import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CustomTable from "../../components/CustomTable";
import { nfts } from "../../consts";
import { useAuth } from "../../context/AuthContext";
import { useLoaderData } from "react-router";
import { useLoanContext } from "../../context/LoanContext";

const Dashboard = () => {
  const [borrowedNFTs, setBorrowedNFTs] = useState([]);
  const [lendedNFTs, setLendedNFTs] = useState([]);

  const { currentAccount, user } = useAuth();
  const { fetchLenderNFTs, fetchBorrowerNFTs, createSale, finalPayment } =
    useLoanContext();

  const [price, setPrice] = useState(0);
  const fetchData = useCallback(async () => {
    try {
      const data1 = await fetchLenderNFTs(currentAccount);
      const data2 = await fetchBorrowerNFTs(currentAccount);

      setLendedNFTs(data1);
      setBorrowedNFTs(data2);
    } catch (err) {
      console.log(err);
    }
  });

  useEffect(() => {
    const onLoad = () => {
      fetchData();
    };
    onLoad();
  }, []);

  const handlePayment = async (e, ix) => {
    e.preventDefault();
    try {
      await finalPayment(ix);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateSale = async (e, ix) => {
    e.preventDefault();
    try {
      await createSale(ix, price);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <Navbar />

        <div className="flex-col">
          <Banner name="Dashboard" />
          <div className="mx-auto py-10 px-10">
            <Tabs>
              <TabList>
                <Tab>My Lended Offers</Tab>
                <Tab>My Borrowed Offers</Tab>
              </TabList>
              <TabPanel>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th>Borrower Address</th>
                      <th>Interest</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Duration</th>
                      <th>Collateral</th>
                      <th>Completed</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {lendedNFTs.map((item, ix) => (
                      <tr key={ix}>
                        <td>item.borrowerAddress</td>
                        <td>item.interest</td>
                        <td>item.startDate</td>
                        <td>item.endDate</td>
                        <td>item.duration</td>
                        <td>item.collateral</td>
                        <td>item.isPaid</td>
                        <td>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <input
                              type="number"
                              onChange={(e) => setPrice(e.target.value)}
                              placeholder="Price"
                            />
                            <button
                              onClick={(e) => handleCreateSale(e, ix)}
                              class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                            >
                              Create Sale
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th>Lender Address</th>
                      <th>Interest</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Duration</th>
                      <th>Collateral</th>
                      <th>Completed</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {borrowedNFTs.map((item, ix) => (
                      <tr key={ix}>
                        <td>{item.lenderAddress}</td>
                        <td>{item.interest}</td>
                        <td>{item.startDate}</td>
                        <td>{item.endDate}</td>
                        <td>{item.duration}</td>
                        <td>{item.collateral}</td>
                        <td>{item.isPaid}</td>
                        <td>
                          <button
                            onClick={(e) => handlePayment(e, ix)}
                            class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                          >
                            Pay
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
