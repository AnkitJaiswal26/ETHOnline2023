import React, { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import Wenb3Model from "web3modal";
import { chainId, supportedChains } from "./constants";
import { useAuth } from "./AuthContext";
import { Web3Storage } from "web3.storage";
import axios from "axios";

export const LoanContext = React.createContext();

export const useLoanContext = () => useContext(LoanContext);

export const LoanContextProvider = ({ children }) => {
  const web3AccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEFjNjkxYTc1NTFBODU3MzIzMTE2MWZEMzUyMUFEQ0MyNWFEQzIyOWMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzM2MjY2MzYyMzQsIm5hbWUiOiJWSlRJSGFjayJ9.uy6sLbmvqoxFA6103tzsK-Ga0H_x_M9z_iYDoK4sPp0";
  const web3Storage = new Web3Storage({ token: web3AccessToken });
  const { currentAccount } = useAuth();

  return <LoanContext.Provider value={{}}>{children}</LoanContext.Provider>;
};
