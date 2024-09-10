import { useQuery } from "@tanstack/react-query";
import useAuth from "../Provider/useAuth";
import useAxiosSequre from "./useAxiosSequre";
import { useState } from "react";

function useAdmin() {
    const axisoSequre = useAxiosSequre();
    const { user } = useAuth();
    const { data: isAdmin, isPending  } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const res = await axisoSequre.get(`/user/admin/${user?.email}`);
            return res.data;
        }
    });
    return [isAdmin, isPending];
}

export default useAdmin;