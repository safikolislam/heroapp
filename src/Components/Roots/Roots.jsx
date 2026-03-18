import React from 'react';
import Navbar from '../../Routes/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-20 bg-gray-100 mt-10">

            <Outlet></Outlet>
            </div>
            <Footer></Footer>             
        </div>
    );
};

export default Roots;