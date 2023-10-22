import { createContext, useContext, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [user, setUser] = useState("");

  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Install Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        axiosInstance.get("/getUserInfo").then((res) => {
          setUser(res.data.user);
        });
        console.log("Current Account", currentAccount);
      } else {
        console.log("No accounts found!");
      }
    } catch (error) {
      console.log("Someting wrong while connecting to wallet!");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        checkIfWalletConnected,
        currentAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
