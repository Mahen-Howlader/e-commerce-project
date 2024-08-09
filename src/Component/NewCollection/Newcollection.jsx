import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Popularproductcard from "../Product/PopularProduct/Popularproductcard";
import Loading from "../Loading/Loading";

function Newcollection() {
    const { error, data,isLoading } = useQuery({
        queryKey: ['newcollection'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/populardata?sort=asc`);
            return data;
        }
    })

    if(isLoading) return <Loading></Loading>

    return (
        <div >
            <div className='mt-20'>
                <h2 className='text-center pb-5 text-3xl uppercase font-bold'>New Collection</h2>
                <hr className='h-[3px] md:w-1/3 mx-auto bg-gradient-to-l from-transparent via-black to-transparent  mb-10' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {data?.slice(0,6).map((item, index) => {
                        return <Popularproductcard key={index} product={item}></Popularproductcard>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Newcollection;