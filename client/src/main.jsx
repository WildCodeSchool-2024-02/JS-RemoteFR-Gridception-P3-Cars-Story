import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import SportsCars from "./pages/SportsCars";
import OldandNewCars from "./pages/OldandNewCars";
import LifeOfCars from "./pages/LifeOfCars";
import ChatElectricCars from "./pages/ChatElectricCars";

import "./styles/style.css";
import SecurityDetails from "./pages/SecurityDetails";
import TuningDetails from "./pages/TuningDetails";

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
        path: "/old-and-new-cars",
        element: <OldandNewCars />,
      },
      {
        path: "/life-of-cars",
        element: <LifeOfCars />,
      },
      {
        path: "/chat-electric-cars",
        element: <ChatElectricCars />,
      },

      {
        path: "sports-cars/:id/security",
        element: <SecurityDetails />,
      },
      {
        path: "sports-cars/:id/tuning",
        element: <TuningDetails />,
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
