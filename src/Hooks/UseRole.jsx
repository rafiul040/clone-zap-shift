import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosInstance from './useAxiosInstance';

const UseRole = () => {
    const {user} = useAuth();
    const axiosSecure= useAxiosInstance()
    const {isLoading,  data: role = 'user'} = useQuery({
        queryKey: ['user-role', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/${user.email}/role`)
            return res.data
        }
    })
    return {role, isLoading}
};

export default UseRole;