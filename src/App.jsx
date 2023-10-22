import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import CreateBorrow from "./pages/CreateBorrow/CreateBorrow";
import LendOffer from "./pages/LendOffer";
import BorrowOffer from "./pages/BorrowOffer";
import Marketplace from "./pages/Marketplace";
import Dashboard from "./pages/Dashboard";
import NFTDetails from "./pages/Marketplace/NFTDetails";
import Register from "./pages/Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/create",
      element: <CreateBorrow />,
    },
    {
      path: "/lend",
      element: <LendOffer />,
    },
    // {
    //   path: "/lend/:id",
    //   element: <OfferDetails/>
    // }
    {
      path: "/borrow",
      element: <BorrowOffer />,
    },
    // {
    //   path: "/borrow/:id",
    //   element: <OfferDetails/>
    // }
    {
      path: "/marketplace",
      element: <Marketplace />,
    },
    {
      path: "/marketplace/:id",
      element: <NFTDetails />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
