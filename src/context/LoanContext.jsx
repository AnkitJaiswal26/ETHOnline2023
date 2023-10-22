import React, { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import Wenb3Model from "web3modal";
import {
  chainId,
  supportedChains,
  LoanContractAddress,
  LoanContractABI,
} from "./constants";
import { useAuth } from "./AuthContext";
import { Web3Storage } from "web3.storage";
import axios from "axios";

export const LoanContext = React.createContext();

export const useLoanContext = () => useContext(LoanContext);

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(LoanContractAddress, LoanContractABI, signerOrProvider);

export const LoanContextProvider = ({ children }) => {
  const web3AccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEFjNjkxYTc1NTFBODU3MzIzMTE2MWZEMzUyMUFEQ0MyNWFEQzIyOWMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzM2MjY2MzYyMzQsIm5hbWUiOiJWSlRJSGFjayJ9.uy6sLbmvqoxFA6103tzsK-Ga0H_x_M9z_iYDoK4sPp0";
  const web3Storage = new Web3Storage({ token: web3AccessToken });
  const { currentAccount } = useAuth();

  const connectingWithSmartContract = async () => {
    try {
      const web3Modal = new Wenb3Model();
      const connection = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      return contract;
    } catch (error) {
      console.log("Something went wrong while connecting with contract!");
    }
  };

  const fetchUserByAddress = async (userAddress) => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchUserByAddress(userAddress);
    return data;
  };

  const fetchUserById = async (userId) => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchUserById(userId);
    return data;
  };

  const addUser = async (userName, userAddress) => {
    const contract = await connectingWithSmartContract();
    await contract.addUser(userName, userAddress);
  };

  const addLendAmount = async (
    userAddress,
    amount,
    interest,
    duration,
    startDate,
    endDate,
    collateral
  ) => {
    const contract = await connectingWithSmartContract();
    await contract.addLendAmount(
      userAddress,
      amount,
      interest,
      duration,
      startDate,
      endDate,
      collateral
    );
  };

  const addBorrowAmount = async (
    userAddress,
    amount,
    interest,
    duration,
    startDate,
    endDate,
    collateral
  ) => {
    const contract = await connectingWithSmartContract();
    await contract.addBorrowAmount(
      userAddress,
      amount,
      interest,
      duration,
      startDate,
      endDate,
      collateral
    );
  };

  const acceptLenderOffer = async (
    lenderAddress,
    borrowerAddress,
    lendAmountId
  ) => {
    const contract = await connectingWithSmartContract();
    await contract.acceptLenderOffer(
      lenderAddress,
      borrowerAddress,
      lendAmountId
    );
  };

  const acceptBorrowerOffer = async (
    lenderAddress,
    borrowerAddress,
    borrowAmountId
  ) => {
    const contract = await connectingWithSmartContract();
    await contract.acceptBorrowerOffer(
      lenderAddress,
      borrowerAddress,
      borrowAmountId
    );
  };

  const fetchLendAmountByLender = async (lenderAddress) => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchLendAmountByLender(lenderAddress);
    return data;
  };

  const fetchTotalLendAmountsLendAmounts = async () => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchTotalLendAmountsLendAmounts();
    return data;
  };

  const fetchTotalBorrowAmounts = async () => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchTotalBorrowAmounts();
    return data;
  };

  const fetchLendAmountById = async (lendAmountId) => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchLendAmountById(lendAmountId);
    return data;
  };

  const fetchBorrowAmountById = async (borrowAmountId) => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchBorrowAmountById(borrowAmountId);
    return data;
  };

  const fetchSpecificLendAmountByLender = async (
    lenderAddress,
    lendAmountId
  ) => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchSpecificLendAmountByLender(
      lenderAddress,
      lendAmountId
    );
    return data;
  };

  const fetchSpecificLendAmountByBorrower = async (
    borrowerAddress,
    borrowAmountId
  ) => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchSpecificLendAmountByBorrower(
      borrowerAddress,
      borrowAmountId
    );
    return data;
  };

  const fetchLenderNFTs = async (lenderAddress) => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchLenderNFTs(lenderAddress);
    return data;
  };

  const fetchBorrowerNFTs = async (borrowerAddress) => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchBorrowerNFTs(borrowerAddress);
    return data;
  };

  const fetchLenderTotalNFTs = async () => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchLenderTotalNFTs();
    return data;
  };

  const fetchBorrowerTotalNFTs = async () => {
    const contract = await connectingWithSmartContract();
    const data = await contract.fetchBorrowerTotalNFTs();
    return data;
  };

  return (
    <LoanContext.Provider
      value={{
        fetchUserById,
        fetchUserByAddress,
        addUser,
        addLendAmount,
        addBorrowAmount,
        acceptLenderOffer,
        acceptBorrowerOffer,
        fetchLendAmountByLender,
        fetchTotalLendAmountsLendAmounts,
        fetchTotalBorrowAmounts,
        fetchLendAmountById,
        fetchBorrowAmountById,
        fetchSpecificLendAmountByLender,
        fetchSpecificLendAmountByBorrower,
        fetchLenderNFTs,
        fetchBorrowerNFTs,
        fetchLenderTotalNFTs,
        fetchBorrowerTotalNFTs,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
};
