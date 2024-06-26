import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import SportsCars from "./pages/SportsCars";
import OldandNewCars from "./pages/OldandNewCars";
import LifeOfCars from "./pages/LifeOfCars";
import Chatelectriccars from "./pages/Chatelectriccars";

import "./styles/style.css";

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
        element: <OldandNewCars />,
      },
      {
        path: "/Life-Of-Cars",
        element: <LifeOfCars />,
      },
      {
        path: "/Chat-electric-cars",
        element: <Chatelectriccars />,
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
