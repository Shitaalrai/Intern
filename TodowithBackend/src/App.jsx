import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import InvalidPage from "../pages/InvalidPage";
import Information from "./components/Information";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/register",
      element: <RegisterForm />,
    },
    {
      path: "*",
      element: <InvalidPage />,
    },
    {
      path: "/information",
      element: <Information />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
