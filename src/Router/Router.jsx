import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../Pages/Error/NotFound";
import HomePageCom from "../Pages/HomePageCom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement : <NotFound></NotFound>,
        children : [
            {
                path : "/",
                element : <HomePageCom></HomePageCom>
            }
        ]
    },
]);

export default router;