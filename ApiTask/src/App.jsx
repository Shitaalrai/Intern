import React from "react";
import CardSection from "./components/CardSection";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SinglePage from "./Pages/SinglePage";
import Card from "./components/Card";

function App() {
  const route = createBrowserRouter([
    {
      path: "",
      element: <CardSection />,
    },
    {
      path: "/singlepage/:id",
      element: <SinglePage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
