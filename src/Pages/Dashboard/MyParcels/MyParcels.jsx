import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosInstance from '../../../Hooks/useAxiosInstance';

const MyParcels = () => {

const {user} = useAuth()
const axiosSecure = useAxiosInstance()

    const { data: parcels = []} = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data
        }
    })



    return (
        <div>
            <h2>All Of My Parcels : {parcels.length}</h2>
        </div>
    );
};

export default MyParcels;