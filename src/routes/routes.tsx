import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Hotel from "../pages/Hotel";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import Tour from "../pages/Tour";
import Tourism from "../pages/Tourism";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/tour",
        element: <Tour />,
      },
      {
        path: "/tourism",
        element: <Tourism />,
      },
      {
        path: "/hotels",
        element: <Hotel />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
