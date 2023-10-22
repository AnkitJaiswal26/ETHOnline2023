import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useLoanContext } from "../../context/LoanContext";

const CreateBorrow = () => {
  const [amount, setAmount] = useState(0);
  const [collateral, setCollateral] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [roi, setROI] = useState(0);

  const { user } = useAuth();
  const { addBorrowAmount, addLendAmount } = useLoanContext();

  const handleBorrowSubmit = (e) => {
    axios
      .post("http://localhost:5000/api/addBorrowAmount", {
        userId: user.id,
        amount,
        interest: roi,
        collateral,
        startDate,
        endDate,
      })
      .then(async (res) => {
        await addBorrowAmount();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLendSubmit = (e) => {
    axios
      .post("http://localhost:5000/api/addLendAmount", {
        userId: user.id,
        amount,
        interest: roi,
        collateral,
        startDate,
        endDate,
      })
      .then(async (res) => {
        await addLendAmount(amount);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div>
        <section class="max-w-4xl p-6 mx-auto bg-indigo-900 rounded-md shadow-md  mt-20">
          <Tabs>
            <TabList>
              <Tab>Borrow</Tab>
              <Tab>Lend</Tab>
            </TabList>
            <TabPanel>
              <h1 class="text-xl font-bold text-white capitalize dark:text-white">
                Borrowing Offer
              </h1>

              <form>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label class="text-gray-300" for="username">
                      Amount to borrow
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="text-white dark:text-gray-200" for="username">
                      Collateral
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        onChange={(e) => setCollateral(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      class="text-white dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      Start Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      onChange={(e) => setStartDate(e.target.value)}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      class="text-white dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      End Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      onChange={(e) => setEndDate(e.target.value)}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div class="custom-number-input h-10">
                    <label
                      for="custom-input-number"
                      class="w-full text-white text-sm font-semibold"
                    >
                      Rate of interest
                    </label>
                    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <input
                        type="number"
                        class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                        name="custom-input-number"
                        onChange={(e) => setROI(e.target.value)}
                        value="0"
                      ></input>
                    </div>
                  </div>
                </div>

                <div class="flex justify-end mt-10">
                  <button
                    onClick={handleBorrowSubmit}
                    class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                  >
                    Create
                  </button>
                </div>
              </form>
            </TabPanel>
            <TabPanel>
              <h1 class="text-xl font-bold text-white capitalize dark:text-white">
                Lending Offer
              </h1>

              <form>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label class="text-gray-300" for="username">
                      Amount to lend
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="text-white dark:text-gray-200" for="username">
                      Tokens for collateral
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      class="text-white dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      Start Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      onChange={(e) => setStartDate(e.target.value)}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      class="text-white dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      End Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      onChange={(e) => setEndDate(e.target.value)}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div class="custom-number-input h-10">
                    <label
                      for="custom-input-number"
                      class="w-full text-white text-sm font-semibold"
                    >
                      Rate of interest
                    </label>
                    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <input
                        type="number"
                        class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                        name="custom-input-number"
                        value="0"
                      ></input>
                    </div>
                  </div>
                </div>

                <div class="flex justify-end mt-10">
                  <button
                    onClick={handleLendSubmit}
                    class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                  >
                    Create
                  </button>
                </div>
              </form>
            </TabPanel>
          </Tabs>
        </section>
      </div>
    </>
  );
};

export default CreateBorrow;
