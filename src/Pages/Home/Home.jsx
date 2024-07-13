import Banner from "../../Component/Banner.jsx/Banner";
import Product from "../../Component/Product/Product";
import Footer from "../Shered/Footer";
import Navbar from "../Shered/Navbar";

function Home() {
    return (
        
        <div >
           <Navbar></Navbar>
           <div className="container mx-auto">
           <Banner></Banner>
            <Product></Product>
           </div>
           <Footer></Footer>
        </div>
    );
}

export default Home;