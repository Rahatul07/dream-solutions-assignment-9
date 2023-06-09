import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blogs from "./components/Blogs/Blogs";
import JobDetails from "./components/JobDetails/JobDetails";
import { serviceAndCartData } from "./components/featuresAndSingleData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      { path: "/statistics", element: <Statistics /> },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
        loader: serviceAndCartData,
      },
      { path: "/blogs", element: <Blogs /> },
      {
        path: "/jobDetails/:id",
        element: <JobDetails />,
        loader: ({ params }) => fetch("/data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
