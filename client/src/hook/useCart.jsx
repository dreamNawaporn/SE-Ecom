/* eslint-disable no-unused-vars */
import React , {useContext} from "react";
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from "../context/AuthProvider";
import axiosPublic from "../hook/useAxios";

const useCart = () => {
    const {user} = useContext(AuthContext)
    const {refetch, data: cart=[]} = useQuery({ queryKey: ['carts' , user?.email], queryFn: async() => {
        const response = await axiosPublic.get(
            `http://localhost:5000/carts/${user.email}`
          );
        return response.data
    }})
    return [cart , refetch]
}

export default useCart