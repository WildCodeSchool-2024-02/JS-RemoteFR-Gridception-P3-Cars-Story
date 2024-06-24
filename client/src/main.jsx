import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import SportsCars from "./pages/SportsCars";
import OldandNewCars from "./pages/Old-and-New-Cars";

import "./styles/style.css";
import LifeOfCars from "./pages/Life-Of-Cars";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sports-cars",
        element: <SportsCars />,
      },
      {
        path: "/Old-and-New-Cars",
        element: <OldandNewCars />
      },
      {
        path: "/Life-Of-Cars",
        element:<LifeOfCars />
      },
    ],

  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
