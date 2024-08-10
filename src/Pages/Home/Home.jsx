import { Outlet } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Newcollection from "../../Component/NewCollection/Newcollection";
import Offer from "../../Component/Offer/Offer";
import Footer from "../Shered/Footer";
import Navbar from "../Shered/Navbar";

function Home() {
    return (
        
        <div >
           <Navbar></Navbar>
           <div className="container mx-auto pt-5 min-h-[calc(100vh-348px)]">
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
}

export default Home;