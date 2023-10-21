import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CustomTable from "../../components/CustomTable";
import { nfts } from "../../consts";

const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="flex-col">
          <Banner name="Dashboard" />
          <div className="mx-auto py-10 px-10">
            <Tabs>
              <TabList>
                <Tab>My Borrowed Offers</Tab>
                <Tab>My Lended Offers</Tab>
              </TabList>
              <TabPanel>
                <CustomTable
                  data={nfts}
                  skipCols={["id"]}
                  convertTime={["startDate", "endDate"]}
                />
              </TabPanel>
              <TabPanel>
                <CustomTable
                  data={nfts}
                  skipCols={["id"]}
                  convertTime={["startDate", "endDate"]}
                />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
