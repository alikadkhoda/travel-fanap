import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import SignUp from "../pages/SignUp";

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
            }
        ]

    }
])

export default routes