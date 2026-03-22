import React from 'react';
import errorImage from "../assets/error-404.png"
import { Link } from 'react-router';
const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
           <img className="min-h-xs" src={errorImage} alt="" />
           <h2 className="font-bold text-2xl ">Oops,page not found!</h2>
           <p className="text-gray-400">The page you are looking for is not available</p>
            <Link to="/"><button className=" btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold">Go Back !</button></Link>
        </div>
    );
};

export default NotFound;