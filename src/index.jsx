import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-tabs/style/react-tabs.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { LoanContextProvider } from "./context/LoanContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LoanContextProvider>
        <App />
      </LoanContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);