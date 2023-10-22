import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";
import CustomTable from "../../components/CustomTable";
import { offers } from "../../consts";

const BorrowOffer = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="flex-col">
          <Banner name="Borrow Market" />
          <div className="mx-auto py-10 px-10">
            <CustomTable
              data={offers}
              lengthCols={["offers", "liquidity_offers"]}
              skipCols={["id"]}
              convertTime={['startDate','endDate']}
            />
        </div>
        </div>
      </div>
    </>
  );
};

export default BorrowOffer;
