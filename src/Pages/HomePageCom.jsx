import Banner from "../Component/Banner/Banner";
import Newcollection from "../Component/NewCollection/Newcollection";
import Product from "../Component/Product/Product";
import Offer from './../Component/Offer/Offer';

function HomePageCom(props) {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Offer></Offer>
            <Newcollection></Newcollection>
        </div>
    );
}
export default HomePageCom;