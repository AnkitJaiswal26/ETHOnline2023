import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";
import { offers } from "../../consts";
import CustomTable from "../../components/CustomTable";

const LendOffer = () => {
  return (
    <div>
      <Navbar />

      <div className="flex-col">
        <Banner name="Lending Market" />
        <div className="mx-auto py-10 px-10">
          <CustomTable
            data={offers}
            lengthCols={["offers", "liquidity_offers"]}
            skipCols={["id"]}
          />
        </div>
      </div>
    </div>
  );
};

export default LendOffer;
