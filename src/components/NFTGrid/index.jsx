import React from "react";
import nftimage from "../../assets/images/nftimage.jpg";

const NFTGrid = ({ data, heading }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-indigo-900">
          {heading}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={nftimage}
                  alt={`NFT ${item.id}`}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`/marketplace/${item.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      Collateral: {item.collateral}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Interest: {item.interest}%
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Amount: {item.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTGrid;
