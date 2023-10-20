import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";

const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="flex-col">
          <Banner name="Dashboard" />
          <div className="mx-auto py-10 px-10">Hi from Dash!</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
