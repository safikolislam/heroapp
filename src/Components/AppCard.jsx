import React from 'react';
import { BiSolidStar } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa6';
import { Link} from 'react-router';


const AppCard = ({ App }) => {
  
  const {downloads,image,ratingAvg,id,title} = App

  const formattedDownloads = Intl.NumberFormat("en-us", {
    notation: "compact",
  }).format(downloads);

  return (
  <Link to={`/AppDetails/${id}`}>
  
  <div className=" bg-white w-80 h-auto rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
    
      <div className="flex justify-center p-3">
        <img 
          className="w-full h-40 object-cover rounded-lg" 
          src={image} 
          alt={`${title} logo`} 
        />
      </div>

     
      <div className="px-4 pb-4">
        <h2 className="font-bold text-lg text-gray-800 truncate">
          {title}
        </h2>
        
        <div className="flex justify-between items-center mt-3">
        
          <div className="flex items-center text-green-600 gap-1 text-sm font-medium">
            <FaDownload className="text-xs" />
            <span>{formattedDownloads}</span>
          </div>

       
          <div className="flex items-center text-orange-500 gap-1 text-sm font-medium">
            <BiSolidStar />
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  
  
  
  
  
  </Link> 
  );
};

export default AppCard;