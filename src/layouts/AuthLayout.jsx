import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authimage from '../assets/authimage.png'


const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo></Logo>
            <div className='flex'>
                <div className='flex-1 justify-center items-center'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1 justify-center items-center'>
                    <img src={authimage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;