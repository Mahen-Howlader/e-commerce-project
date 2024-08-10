import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../Pages/Error/NotFound";
import HomePageCom from "../Pages/HomePageCom";
import Kids from './../Pages/Category/Kids/Kids';
import Mens from './../Pages/Category/Mens/Mens';
import Womens from './../Pages/Category/Womens/Womens';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement : <NotFound></NotFound>,
        children : [
            {
                path : "/",
                element : <HomePageCom></HomePageCom>
            },
            {
                path : "/kids",
                element : <Kids></Kids>
            },
            {
                path : "/mens",
                element : <Mens></Mens>
            },
            {
                path : "/womens",
                element : <Womens></Womens>
            },
        ]
    },
]);

export default router;