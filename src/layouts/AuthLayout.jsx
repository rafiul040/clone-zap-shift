import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authimage from '../assets/authimage.png'


const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo></Logo>


            <div className='flex justify-between items-center '>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='bg-[#fafdf0] flex-1 -mt-12 h-[900px]'>
                    <img src={authimage} className='mt-48' alt="" />
                </div>
            </div>


        </div>
    );
};

export default AuthLayout;