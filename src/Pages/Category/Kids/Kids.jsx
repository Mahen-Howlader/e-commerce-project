// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import Loading from "../../../Component/Loading/Loading";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
// import Popularproductcard from "../../../Component/Product/PopularProduct/Popularproductcard";

// function Womens() {
//     const { error, data, isLoading } = useQuery({
//         queryKey: ['populardata'],
//         queryFn: async () => {
//             const { data } = await axios.get(`${import.meta.env.VITE_API}/kidscollection?filter=women`);
//             return data;
//         }
//     })
//     if (isLoading) return <Loading></Loading>;
//     return (
//         <div className="mt-14">
//             <div className="flex w-full  justify-end">

//                 <form className="min-w-52  my-5 ">
//                     <select
//                         id="countries"
//                         className="bg-gray-50 border min-w-52 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     >
//                         <option defaultValue>Sort</option>
//                         <option value="US">Low Price</option>
//                         <option value="CA">High Price</option>
//                     </select>
//                 </form>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
//                 {data?.map((item, index) => {
//                     return <Popularproductcard product={item} key={index}></Popularproductcard>
//                 })}


//             </div>
//             <div className="flex mt-4 items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
//                 <div className="flex flex-1 justify-between sm:hidden">
//                     <a
//                         href="#"
//                         className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                     >
//                         Previous
//                     </a>
//                     <a
//                         href="#"
//                         className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                     >
//                         Next
//                     </a>
//                 </div>
//                 <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//                     <div>
//                         <p className="text-sm text-gray-700">
//                             Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
//                             <span className="font-medium">97</span> results
//                         </p>
//                     </div>
//                     <div>
//                         <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
//                             <a
//                                 href="#"
//                                 className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                             >
//                                 <span className="sr-only">Previous</span>
//                                 <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
//                             </a>
//                             {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
//                             <a
//                                 href="#"
//                                 aria-current="page"
//                                 className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                             >
//                                 1
//                             </a>
//                             <a
//                                 href="#"
//                                 className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                             >
//                                 2
//                             </a>
//                             <a
//                                 href="#"
//                                 className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
//                             >
//                                 3
//                             </a>
//                             <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
//                                 ...
//                             </span>
//                             <a
//                                 href="#"
//                                 className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                             >
//                                 <span className="sr-only">Next</span>
//                                 <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
//                             </a>
//                         </nav>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default Womens;





import { useQuery } from "@tanstack/react-query";
import axios, { all } from "axios";
import Loading from "../../../Component/Loading/Loading";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Popularproductcard from "../../../Component/Product/PopularProduct/Popularproductcard";
import { useState } from "react";
import { Link } from "react-router-dom";

function Womens() {
    const [currentpage, setCurrentPage] = useState(0);
    const [perPage, setPerPage] = useState(5);
    const [sorting, setSorting] = useState("");

    const { error, data: allKidsData, isLoading: DataLoading } = useQuery({
        queryKey: ['populardata', perPage, currentpage, sorting],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/kidscollection?filter=kid&page=${currentpage}&size=${perPage}&sort=${sorting}`);
            return data;
        }
    })

    if (DataLoading) return <Loading></Loading>
    const allData = allKidsData?.result;
    const allDataCount = allKidsData?.count;

    // console.log(dataCount)
    // Pagination
    const allPage = Math.ceil(allDataCount / perPage);
    const page = [...Array(allPage).keys()];
    // console.log(page)


    function handelCurrentPage(val) {
        setCurrentPage(parseInt(val))
    }
    function handelPerPage(e) {
        const dataCount = parseInt(e.target.value)
        setPerPage(dataCount)
        setCurrentPage(0)
    }



    function handelNextPage() {
        if (currentpage < page?.length - 1) {
            setCurrentPage(currentpage + 1)
        }
    }
    function handelPrePage() {
        if (currentpage > 0) {
            setCurrentPage(currentpage - 1)
        }
    }

    function handelSortingValue(e) {
        const data = e.target.value;
        console.log(data);
        setSorting(data)
    }


    // console.log(page)
    return (
        <div className="mt-14">
            <div className="flex w-full  justify-end">

                <form className="min-w-52  my-5 ">
                    <select
                        value={sorting}
                        onChange={handelSortingValue}
                        id="countries"
                        className="bg-gray-50 border min-w-52 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Sort</option>

                        <option value="asc">Low Price</option>
                        <option value="dec">High Price</option>
                    </select>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
                {allData?.map((item, index) => {
                    return <Popularproductcard product={item} key={index}></Popularproductcard>
                })}


            </div>
            <div className="flex mt-4 items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <a
                        href="#"
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Previous
                    </a>
                    <a
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                            <span className="font-medium">97</span> results
                        </p>
                    </div>
                    <div className="flex gap-x-5">
                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                            <a
                                onClick={handelPrePage}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                            </a>
                            {
                                page?.map((val, index) => {
                                    return <Link
                                        onClick={() => handelCurrentPage(val)}
                                        key={index}
                                        className={`relative z-10 inline-flex items-center text-black border  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  ${currentpage === (val) && "bg-indigo-700"}`}
                                    >
                                        {val}
                                    </Link>
                                })
                            }


                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                ...
                            </span>
                            <a
                                onClick={handelNextPage}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                            </a>

                        </nav>
                        <div className="flex items-center space-x-2">
                            <select value={perPage} onChange={handelPerPage} id="perPage" name="perPage" className="block w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Womens;