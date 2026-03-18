import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../AppCard';

const Apps = () => {
    const Apps = useLoaderData();
    
    return (
        <div>
            <h2 className="font-bold text-4xl text-center mb-2">Trending Apps</h2>
            <p className="text-gray-400 text-center mb-5">Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className="flex justify-between px-30">
                <h2 className="font-bold">App Found ({Apps.length})</h2>
                <div>
                    <input placeholder="Search..." className="p-1 border rounded-md focus:outline-none  focus:border-purple-600" type="search" name="" id="" />
                </div>
            </div>
     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  px-10 py-10 ml-20">
            {Apps.map((App,index)=><AppCard key={index} App={App}></AppCard>)}
        </div>
        </div>
   
    );
};

export default Apps;