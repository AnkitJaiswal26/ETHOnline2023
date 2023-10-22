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

  const addLendAmount = async (amount) => {
    const contract = await connectingWithSmartContract();
    await contract.addLendAmount();
  };

  const addBorrowAmount = async (collateral) => {
    const contract = await connectingWithSmartContract();
    await contract.addBorrowAmount({
      // value: ethers.utils.parseEther(collateral * 0.001),
    });
  };

  const acceptLenderOffer = async (
    lenderAddress,
    borrowerAddress,
    lenderId,
    borrowerId,
    amount,
    interest,
    duration,
    startDate,
    endDate,
    collateral
  ) => {
    const contract = await connectingWithSmartContract();
    await contract.acceptLenderOffer(
      lenderAddress,
      borrowerAddress,
      lenderId,
      borrowerId,
      amount,
      interest,
      duration,
      startDate,
      endDate,
      collateral
    );
  };

  const acceptBorrowerOffer = async (
    lenderAddress,
    borrowerAddress,
    lenderId,
    borrowerId,
    amount,
    interest,
    duration,
    startDate,
    endDate,
    collateral
  ) => {
    const contract = await connectingWithSmartContract();
    await contract.acceptBorrowerOffer(
      lenderAddress,
      borrowerAddress,
      lenderId,
      borrowerId,
      amount,
      interest,
      duration,
      startDate,
      endDate,
      collateral
    );
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

  const finalPayment = async (id) => {
    const contract = await connectingWithSmartContract();
    await contract.finalPayment(id);
  };

  const createSale = async (id, price) => {
    const contract = await connectingWithSmartContract();
    await contract.createSale(id, price);
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
        fetchLenderNFTs,
        fetchBorrowerNFTs,
        fetchLenderTotalNFTs,
        fetchBorrowerTotalNFTs,
        finalPayment,
        createSale,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
};
