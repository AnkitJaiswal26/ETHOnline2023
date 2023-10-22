import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";
import NFTGrid from "../../components/NFTGrid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { nfts } from "../../consts";

const Marketplace = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="flex-col">
          <Banner name="Marketplace" />
          <div className="mx-auto py-10 px-10">
            <Tabs>
              <TabList>
                <Tab>Borrow NFTs</Tab>
                <Tab>Lend NFTs</Tab>
              </TabList>
              <TabPanel>
                <NFTGrid data={nfts} heading="Borrowed NFTs" />
              </TabPanel>
              <TabPanel>
                <NFTGrid data={nfts} heading="Lended NFTs" />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
