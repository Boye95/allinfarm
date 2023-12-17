import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";
import DashboardLayout from "./pages/dashboard";

import NotFoundPage from "./pages/NotFoundPage"; 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
