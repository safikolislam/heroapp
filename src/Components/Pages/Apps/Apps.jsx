import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../AppCard';
import { CiSearch } from 'react-icons/ci';

const Apps = () => {
    const Apps = useLoaderData();
    
    return (
        <div className="py-10">
            <h2 className="font-bold text-4xl text-center mb-2">Trending Apps</h2>
            <p className="text-gray-400 text-center my-5 mb-10">Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className="flex flex-col md:flex-row md:justify-between items-center pl-20   my-10 ">
                <h2 className="font-bold text-xl mb-10 ">App Found ({Apps.length})</h2>
                <div className="flex items-center gap-2 px-3 py-1 border rounded-md
                 focus-within:border-purple-600 mr-15 lg:mr-25">
                    <CiSearch className="text-xl" />
                    <input className="focus:outline-none" placeholder="Search..." type="search" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
                {Apps.map((App, index) => (
                    <AppCard key={index} App={App} />
                ))}
            </div>
        </div>
    );
};

export default Apps;