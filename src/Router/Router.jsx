import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../Pages/Error/NotFound";
import HomePageCom from "../Pages/HomePageCom";
import Kids from './../Pages/Category/Kids/Kids';
import Mens from './../Pages/Category/Mens/Mens';
import Womens from './../Pages/Category/Womens/Womens';
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Statistic from "../DashboardComponent/Statistic/Statistic";
import Productdetails from "../Component/ProductDetails/Productdetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <HomePageCom></HomePageCom>
            },
            {
                path: "/kids",
                element: <Kids></Kids>
            },
            {
                path: "/kids/:id",
                element: <Productdetails></Productdetails>
            },
            {
                path: "/mens",
                element: <Mens></Mens>
            },
            {
                path: "/womens",
                element: <Womens></Womens>
            },

        ],
    }, {
        path: "/login",
        element: <Login></Login>
    }, {
        path: "/signup",
        element: <SignUp></SignUp>
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <Statistic></Statistic>
            }
        ]
    },
]);

export default router;