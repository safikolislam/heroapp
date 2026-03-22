import React, { useEffect, useState } from 'react';
import downLoadIcon from "../../../assets/icon-downloads.png";
import ratingIcon from "../../../assets/icon-ratings.png";
import reviewsIcon from "../../../assets/icon-review.png";
import appError from "../../../assets/App-Error.png"
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const Installation = () => {
    const [myApps, setMyApps] = useState([]);
    const [sort,setSort] = useState("");
    const handleSort = (type) =>{
         setSort(type)
         if(type === "High To Low"){
            const sortedHighToLow = [...myApps].sort((a,b)=>b.downloads-a.downloads);
               setMyApps(sortedHighToLow)
         }
         if(type === "Low To High"){
              const sortedHighToLow = [...myApps].sort((a,b)=>a.downloads-b.downloads);
               setMyApps(sortedHighToLow)
         }
    }

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("Installed-apps")) || [];
        setMyApps(saved);
    }, []);
       const handleRemove = (id,title) =>{
         const remainingApps = myApps.filter(app=>app.id !=id);
         setMyApps(remainingApps)
         localStorage.setItem("Installed-apps",JSON.stringify(remainingApps))
         toast.success(` ${title} successfully uninstalled`)
       }
    return (
        <div className="min-h-screen p-4">
            <div className="text-center space-y-5">
                <h2 className="font-bold text-2xl">Your Installed Apps</h2>
                <p className="text-gray-400">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="mt-20">
                <div className="flex justify-between items-center p-4">
                    <h2 className="font-bold">{myApps.length} Apps Found</h2>
                    <details className="dropdown">
                        <summary className="btn m-1 rounded-md">Sort By : {sort ? sort : ""}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-semibold">
                            <li><button onClick={()=>handleSort("High To Low")} >Size (High To Low)</button></li>
                            <li><button onClick={()=>handleSort("Low To High")}>Size (Low To High)</button></li>
                        </ul>
                    </details>
                </div>

                {myApps.length > 0 ? (
                    myApps.map((app) => (
                        <div key={app.id} className="bg-white m-5 rounded-md p-4 flex gap-5 items-center shadow-sm">
                            <img className="w-16 h-16 object-cover rounded" src={app.image} alt={app.title} />
                            
                            <div className="flex justify-between items-center w-full">
                                <div>
                                    <h2 className="font-bold">{app.title}</h2>
                                    <div className="grid grid-cols-3 gap-4 mt-1">
                                     
                                            <div  className="flex items-center gap-2">
                                                <img width={15} src={downLoadIcon} alt="icon" />
                                                       <p className="text-sm text-black">
                                                    {Intl.NumberFormat("en-us", { notation: "compact" }).format(app.downloads) } 
                                                </p>
                                            </div>

                                            
                                                   <div className="flex items-center gap-1">
                                                     <img width={15} src={ratingIcon} alt="" />
                                                        <p className="text-[#FF8811]">{app.topRating.name.charAt(0)}</p>
                                                   </div>
                                      
                                                 <div className="flex items-center gap-1">
                                                    <img width={20} src={reviewsIcon} alt="" />
                                                      <p className="text-sm text-black">
                                                    {Intl.NumberFormat("en-us", { notation: "compact" }).format(app.size) } MB
                                                </p>
                                                 </div>
                                    </div>
                                </div>
                                <button onClick={()=>handleRemove(app.id,app.title)} className="btn btn-error btn-sm text-white">unInstall</button>
                            </div>
                        </div>
                    ))
                ) : (
                   <div className="space-y-3 flex flex-col items-center justify-center min-h-[60vh] text-center" >
                 <img src={appError} alt="" />
                 <h1 className="font-bold text-2xl">OOPS !! APP NOT FOUND</h1>
                   <p>The App are requesting is not found on Our system.please try another apps</p>
                   <Link to="/Apps"><button className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold">Go Back !</button></Link>
                   </div>
                )}
            </div>
        </div>
    );
};

export default Installation;







