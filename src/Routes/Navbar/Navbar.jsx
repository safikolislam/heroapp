import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const [toggle,setToggle] = useState(false);
  const handleToggle = () =>{
    setToggle(!toggle)
  }
    return (
        <div className=  "z-30 top-0 left-0 shadow-md px-5 py-5  fixed w-full backdrop-blur-md bg-white/20 flex justify-between items-center">
         <Link to="/"><div className="flex items-center">
            <img className="w-10" src={logo} alt="logo" />
           <h2 className="font-semibold text-xl">Hero Apps</h2>
        </div></Link>
       <div className="lg:flex space-x-3 hidden">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Apps">Apps</NavLink>
        <NavLink to="/Installation">Installation</NavLink>
        <NavLink to="/Lost">Lost</NavLink>
       </div>
       <button className="btn bg-[#632EE3]  items-center text-white rounded-md lg:block hidden"><div className="flex items-center gap-2"><FaGithub /> Contribute
        </div></button>
      <div className="relative lg:hidden " onClick={handleToggle}>
{ toggle ?   <RxCross1 size={20} /> :  <GiHamburgerMenu size={20} /> }
     
      </div>
   {toggle && <div className="flex flex-col space-y-3 absolute top-20  right-0 w-40 h-auto rounded-sm bg-gray-200 text-center p-4  ">
      

  
    <NavLink  to="/" >Home</NavLink>
    <NavLink  to="/Apps" >Apps</NavLink>
    <NavLink  to="/Installation" >Installation</NavLink>
    <NavLink  to="/Lost" >Lost</NavLink>
    <button className=" mt-3 btn bg-[#632EE3] text-white rounded-md  flex items-center gap-2 ml-5"><FaGithub /> Contribute</button>
    
    </div>}
   </div>
    );
};

export default Navbar;