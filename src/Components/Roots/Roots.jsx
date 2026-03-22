import React from 'react';
import Navbar from '../../Routes/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Pages/Footer/Footer';
import AnimationLoading from '../AnimationLoading';

const Roots = () => {
    const navigation  = useNavigation();
    const isPageLoading = navigation.state==="loading"
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-10 bg-gray-100 mt-20">
                <main className="min-h-screen">
               {
                isPageLoading ? 
                (<AnimationLoading></AnimationLoading>)
                :
                ( <Outlet></Outlet> )
                
               }
                </main>

            </div>
            <Footer></Footer>             
        </div>
    );
};

export default Roots;