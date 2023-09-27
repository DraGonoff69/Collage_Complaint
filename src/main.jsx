import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import ReportedComplaints from "./components/ReportedComplaints";
import "./index.css";
import CitizenDashboard from "./pages/CitizenDashboard";
import CitizenLogin from "./pages/CitizenLogin";
import HomePage from "./pages/HomePage";
import OfficialDashboard from "./pages/OfficialDashboard";
import OfficialLogin from "./pages/OfficialLogin";
import ReportComplaint from "./pages/ReportComplaint";
import Footer from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
    <HomePage />
    <Footer/>
    </>,
  },
  {
    path: "/citizen-login",
    element: <>
    <CitizenLogin />
    <Footer/>
    </>,
  },
  {
    path: "/official-login",
    element: <>
    <OfficialLogin />
    <Footer/>
    </>,
  },
  {
    path: "/citizen-dashboard",
    element: 
    <>
    <CitizenDashboard />
    <Footer/>
    </>,
  },
  {
    path: "/official-dashboard",
    element: <>
    <OfficialDashboard />
    <Footer/>
    </>,
  },
  {
    path: "/report",
    element: <>
    <ReportComplaint />
    <Footer/>
    </>,
  },
  {
    path: "/track-complaints",
    element: (
      <>
        <Navbar />
        <ReportedComplaints />
        <Footer/>
      </>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

