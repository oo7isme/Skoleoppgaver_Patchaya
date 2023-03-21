import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import Home from "./routes/Home";
import Order from "./routes/Order";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/bestill",
    element: <Order />,
  },
  {
    path: "/login",
    element: <Order />,
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
