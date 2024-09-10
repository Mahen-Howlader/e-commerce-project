import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Loading from "../../Component/Loading/Loading";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSequre from "../../Hooks/useAxiosSequre";

function Alluser() {
    const axiosPublic = useAxiosPublic();
    const axiosSequre = useAxiosSequre();
    // Query to fetch user data
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["userData"],
        queryFn: async () => {
            const response = await axiosSequre("/user");
            return response?.data;
        }
    });


    // Mutation to delete a user
    const { mutateAsync } = useMutation({
        mutationFn: async (id) => {
            console.log(id)
            const result = await axiosPublic.delete(`/user/${id}`);
            return result;
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success("User deleted successfully.");
            refetch()
        },
        onError: (error) => {
            console.error(error);
            toast.error("Failed to delete user.");
        }
    });

    // Function to delete a user
    async function deleteUser(id) {
        await mutateAsync(id);
    }

    // Handle loading state

    // Render user data
    const allUser = data;




    const { mutateAsync: mutateAsyncUser } = useMutation({
        mutationFn: async (data) => {
            console.log(data);
            const result = await axiosPublic.patch(`/rolechange/admin/${data?.email}`, { role: data?.userRole });
            return result;
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success("User deleted successfully.");
        },
        onError: (error) => {
            console.error(error);
            toast.error("Failed to delete user.");
        }
    });

    // handelUserRole
    async function handelUserRole(e, email) {
        const userRole = e.target.value;
        console.log(userRole)
        await mutateAsyncUser({ email, userRole })

    }



    if (isLoading) return <Loading />;
    // console.log(data);

    return (
        <div>
            <div className="relative rounded-md overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Role</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUser?.map((val, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {val?.name}
                                </th>
                                <td className="px-6 py-4">{val?.email}</td>
                                <td className="px-6 py-4">
                                    <select defaultValue={val?.role} onChange={(e) => handelUserRole(e, val?.email)} id="userRole" name="userRole">
                                        <option value="admin">Admin</option>
                                        <option value="member">Member</option>
                                        <option value="user">User</option>
                                    </select>

                                </td>
                                <td onClick={() => deleteUser(val?._id)} className="px-6 py-4 cursor-pointer">
                                    <MdDelete size={30} className="hover:text-red-500" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Alluser;
