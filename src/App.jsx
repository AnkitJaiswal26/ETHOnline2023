import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing/Landing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
