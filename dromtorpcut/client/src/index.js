import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/Index.css";
import Home from "./routes/Home";
import Order from "./routes/Order";
import Info from "./routes/Info";
import Summary from "./routes/Summary";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/step1",
    element: <Order />,
  },
  {
    path: "/step2",
    element: <Info />,
  },
  {
    path: "/step3",
    element: <Summary />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main-container">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
