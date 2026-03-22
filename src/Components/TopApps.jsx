
import { useLoaderData, useNavigate, } from 'react-router';
import AppCard from './AppCard';
import AnimationLoading from './AnimationLoading';
const TopApps = () => {

    const topAppData = useLoaderData();
    
     const navigate = useNavigate();
    
 
    return (
        <div className="mt-20 space-y-10">
            <h2 className="font-bold text-3xl text-center">Trending Apps</h2>
            <p className="text-center text-gray-500">Explore All Trending Apps on the Market developed by us</p>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center  gap-5">
      {
                topAppData.slice(0,8).map((App,index)=><AppCard key={index} App={App}></AppCard>)
            }
 </div>
      <div className="flex justify-center items-center py-5 ">

            <button  onClick={()=>navigate("/Apps")} 
            className="rounded-md btn bg-linear-to-r
             from-[#632EE3] to-[#9F62F2] text-white">Show All</button>
      </div>
        </div> 
    );
};

export default TopApps;