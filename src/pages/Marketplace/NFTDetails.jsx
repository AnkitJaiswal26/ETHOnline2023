import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";
import { useParams } from "react-router-dom";
import { nfts } from "../../consts";
import nftImage from "../../assets/images/nftimage.jpg";
import { timeConverter } from "../../helpers";

const NFTDetails = () => {
  const { id } = useParams();
  const [nftData, setNftData] = useState({});

  useEffect(() => {
    setNftData(nfts[id-1]);
  }, [id]);

  return (
    <>
      <div>
        <Navbar />
        <div className="flex-col">
          <Banner name="Offer Details" />
          <div className="mx-auto py-10 px-10">
            <div className="flex flex-row bg-white p-4 rounded-lg shadow-md">
              <div className="w-1/3 pr-4">
                <img
                  src={nftImage} // Replace with the actual image URL
                  alt={nftData.name} // Replace with the NFT name or description
                  className="w-full h-auto"
                />
              </div>
              <div className="w-2/3">
                <h2 className="text-xl font-semibold">NFT: {nftData.id}</h2>
                <p className="text-gray-800">Borrower: {nftData.borrowerAddress}</p>
                <p className="text-gray-800">Lender: {nftData.lenderAddress}</p>
                <p className="text-gray-800">Amount: {nftData.amount}</p>
                <p className="text-gray-800">Collateral: {nftData.collateral}</p>
                <p className="text-gray-800">Interest: {nftData.interest}</p>
                <p className="text-gray-800">startDate: {timeConverter(nftData.startDate)}</p>
                <p className="text-gray-800">endDate: {timeConverter(nftData.endDate)}</p>
                
                
                {/* Add more NFT details as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTDetails;
