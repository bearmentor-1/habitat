import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { App } from "./app";
import {
  RootRoute,
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import { ErrorRoute } from "./routes/error";
import { AboutRoute } from "./routes/about";
import { HabitRoute, loader as habitLoader } from "./routes/habit";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorRoute />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "/about",
        element: <AboutRoute />,
      },
      {
        path: "/habits/:habitId",
        element: <HabitRoute />,
        loader: habitLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
