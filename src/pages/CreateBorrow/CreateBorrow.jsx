import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Navbar from "../../components/Navbar/Navbar";

const CreateBorrow = () => {
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
                      Tokens to borrow
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">
                          Currency
                        </label>
                        <select
                          id="currency"
                          name="currency"
                          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option>ETH</option>
                          <option>STG</option>
                          <option>WIGO</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <label class="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span class="ml-2 text-white">Use NFT as collateral</span>
                    </label>
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
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">
                          Currency
                        </label>
                        <select
                          id="currency"
                          name="currency"
                          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option>ETH</option>
                          <option>STG</option>
                          <option>WIGO</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      class="text-white dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      Date of Expiry
                    </label>
                    <input
                      id="date"
                      type="date"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div class="custom-number-input h-10">
                    <label
                      for="custom-input-number"
                      class="w-full text-white text-sm font-semibold"
                    >
                      Number of Payments
                    </label>
                    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                      >
                        <span class="m-auto text-2xl font-thin">−</span>
                      </button>
                      <input
                        type="number"
                        class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                        name="custom-input-number"
                        value="0"
                      ></input>
                      <button
                        data-action="increment"
                        class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                      >
                        <span class="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>

                  <div class="custom-number-input h-10">
                    <label
                      for="custom-input-number"
                      class="w-full text-white text-sm font-semibold"
                    >
                      Rate of interest
                    </label>
                    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                      >
                        <span class="m-auto text-2xl font-thin">−</span>
                      </button>
                      <input
                        type="number"
                        class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                        name="custom-input-number"
                        value="0"
                      ></input>
                      <button
                        data-action="increment"
                        class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                      >
                        <span class="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex justify-end mt-10">
                  <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                    Save
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
                      Tokens to borrow
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">
                          Currency
                        </label>
                        <select
                          id="currency"
                          name="currency"
                          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option>ETH</option>
                          <option>STG</option>
                          <option>WIGO</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <label class="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span class="ml-2 text-white">Use NFT as collateral</span>
                    </label>
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
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">
                          Currency
                        </label>
                        <select
                          id="currency"
                          name="currency"
                          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option>ETH</option>
                          <option>STG</option>
                          <option>WIGO</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      class="text-white dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      Date of Expiry
                    </label>
                    <input
                      id="date"
                      type="date"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div class="custom-number-input h-10">
                    <label
                      for="custom-input-number"
                      class="w-full text-white text-sm font-semibold"
                    >
                      Number of Payments
                    </label>
                    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                      >
                        <span class="m-auto text-2xl font-thin">−</span>
                      </button>
                      <input
                        type="number"
                        class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                        name="custom-input-number"
                        value="0"
                      ></input>
                      <button
                        data-action="increment"
                        class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                      >
                        <span class="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>

                  <div class="custom-number-input h-10">
                    <label
                      for="custom-input-number"
                      class="w-full text-white text-sm font-semibold"
                    >
                      Rate of interest
                    </label>
                    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                      >
                        <span class="m-auto text-2xl font-thin">−</span>
                      </button>
                      <input
                        type="number"
                        class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                        name="custom-input-number"
                        value="0"
                      ></input>
                      <button
                        data-action="increment"
                        class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                      >
                        <span class="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex justify-end mt-10">
                  <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                    Save
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
