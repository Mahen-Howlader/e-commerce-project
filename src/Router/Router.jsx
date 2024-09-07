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
import Cart from "../Pages/Cart/Cart";
import Privedrouter from "../Pages/Privedrouter/Privedrouter";
import UsersignIn from "../Pages/Privedrouter/UsersignIn";
import Alluser from "../DashboardComponent/AllUser/Alluser";
import Managebooking from "../DashboardComponent/Managebooking/Managebooking";
import Manageitems from "../DashboardComponent/Manageitems/Manageitems";
import Allitems from "../DashboardComponent/Allitems/Allitems";
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
                element: <Privedrouter><Kids></Kids></Privedrouter>
            },
            {
                path: "/kids/:id",
                element: <Privedrouter><Productdetails></Productdetails></Privedrouter>
            },
            {
                path: "/womens/:id",
                element: <Privedrouter><Productdetails></Productdetails></Privedrouter>
            },
            {
                path: "/mens/:id",
                element: <Privedrouter><Productdetails></Productdetails></Privedrouter>
            },
            {
                path: "/mens",
                element: <Privedrouter><Mens></Mens></Privedrouter>
            },
            {
                path: "/womens",
                element: <Privedrouter><Womens></Womens></Privedrouter>
            },
            {
                path: "/cart",
                element: <Privedrouter><Cart></Cart></Privedrouter>
            },

        ],
    }, {
        path: "/login",
        element: <UsersignIn><Login></Login></UsersignIn>
    }, {
        path: "/signup",
        element: <UsersignIn><SignUp></SignUp></UsersignIn>
    },
    {
        path: "/dashboard",
        element: <Privedrouter><Dashboard /></Privedrouter>,
        children: [
            {
                index: true,
                element: <Statistic></Statistic>
            },
            {
                path: "alluser",
                element: <Alluser></Alluser>
            },
            {
                path: "managebooking",
                element: <Managebooking></Managebooking>
            },
            {
                path: "manageitems",
                element: <Manageitems></Manageitems>
            },
            {
                path: "allitems",
                element: <Allitems></Allitems>
            },
        ]
    },
]);

export default router;