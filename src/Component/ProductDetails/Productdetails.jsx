import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import axios from "axios";
import { useState } from "react";

function Productdetails() {
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');

    const handleSizeChange = (e) => setSize(e.target.value);
    const handleColorChange = (e) => setColor(e.target.value);


    const { id } = useParams();
    const { error, data, isLoading } = useQuery({
        queryKey: ['kid', id],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/kid/${id}`);
            return data;
        }
    })
    if (isLoading) return <Loading></Loading>

    const { name, category, brand_name, image, new_price, old_price, rating, description } = data;

    console.log(size, color)
    return (
        <div className="mt-20">
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img
                                    className="w-full h-full border border-black object-cover"
                                    src={`${image}`}
                                    alt="Product Image"
                                />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                {name}
                            </h2>

                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Price:
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-300">${new_price}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Availability:
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                </div>
                            </div>
                            <div className="max-w-sm mx-auto p-4 bg-white shadow-md rounded">

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Select Size:
                                    </label>
                                    <select
                                        value={size}
                                        onChange={handleSizeChange}
                                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Choose Size</option>
                                        <option value="S">Small</option>
                                        <option value="M">Medium</option>
                                        <option value="L">Large</option>
                                        <option value="XL">Extra Large</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Select Color:
                                    </label>
                                    <select
                                        value={color}
                                        onChange={handleColorChange}
                                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Choose Color</option>
                                        <option value="red">Red</option>
                                        <option value="blue">Blue</option>
                                        <option value="green">Green</option>
                                        <option value="black">Black</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">
                                    Product Description:
                                </span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productdetails;