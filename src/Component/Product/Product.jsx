import axios from 'axios';
import Popularproductcard from './PopularProduct/Popularproductcard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
function Product() {
    const { isPending, error, data } = useQuery({
        queryKey: ['alldata'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/alldata?sort=asc`);
            return data;
        }
    })


    if (isPending) return <Loading></Loading>

    return (
        <div >
            <div className='mt-20'>
                <h2 className='text-center pb-5 text-3xl uppercase font-bold'>Popular Product</h2>
                <hr className='h-[3px] md:w-1/3 mx-auto bg-gradient-to-l from-transparent via-black to-transparent  mb-10' />
                <div className='grid grid-cols-3 gap-10'>
                    {data.map((item, index) => {
                        return <Popularproductcard  product={item}></Popularproductcard>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Product;