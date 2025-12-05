import React from 'react';
import useAuth from '../Hooks/useAuth';

const AdminRoute = () => {
    const {user, loading} = useAuth();
    const {}


    if(loading){
        return <loading></loading>
    }



    return (
        <div>
            
        </div>
    );
};

export default AdminRoute;