import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";

const Marketplace = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="flex-col">
          <Banner name="Marketplace" />
          <div className="mx-auto py-10 px-10">Hi from Market!</div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
