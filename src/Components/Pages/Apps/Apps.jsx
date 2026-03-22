import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../AppCard';
import { CiSearch } from 'react-icons/ci';
import AnimationLoading from '../../AnimationLoading';


const Apps = () => {
    const allApps = useLoaderData();
     const [search,setSearch] = useState("");
     const [isSearching,setSearching] = useState(false);
     const handleSearch=(e)=>{
        setSearch(e.target.value);
        if(e.target.value != ""){
            setSearching(true)
        }
     }

     useEffect(() => {
        const delay = setTimeout(() => {
            setSearching(false);
        }, 300); 

        return () => clearTimeout(delay);
    }, [search]);
     const filteredApps = allApps.filter((app)=>app.title.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="py-10 min-h-screen">
            <h2 className="font-bold text-4xl text-center mb-2">Trending Apps</h2>
            <p className="text-gray-400 text-center my-5 mb-10">Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className="flex flex-col md:flex-row md:justify-between items-center pl-20   my-10 ">
                <h2 className="font-bold text-xl mb-10 ">App Found ({filteredApps.length})</h2>
                <div className="flex items-center gap-2 px-3 py-1 border rounded-md
                 focus-within:border-purple-600 mr-15 lg:mr-25">
                    <CiSearch className="text-xl" />
                    <input onChange={handleSearch} className="focus:outline-none" placeholder="Search..." type="search" value={search} />
                </div>
            </div>
        {isSearching   ? (
            <AnimationLoading></AnimationLoading>
        ) : filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {
            filteredApps.map((App,index)=>(
                <AppCard key={index} App={App} ></AppCard>
            ))
        }
          </div>
        ) : (
            <div className="text-center w-full py-20">
        <h2 className="text-3xl font-bold text-gray-300">No App Found!</h2>
        <p className="text-gray-400">Try searching for another Apps.</p>
    </div>
        )
        
        }
            
        </div>
    );
}



export default Apps;