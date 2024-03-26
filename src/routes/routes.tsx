import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import SignUp from "../pages/SignUp";
import Tour from "../pages/Tour";
import Tourism from "../pages/Tourism";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/sign-up',
                element: <SignUp/>
            },
            {
                path: '/tour',
                element: <Tour/>
            },
            {
                path: '/tourism',
                element: <Tourism/>
            }
        ]

    }
])

export default routes