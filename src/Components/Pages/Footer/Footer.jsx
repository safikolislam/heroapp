import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#001931] w-full p-10">
      
  
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
   
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img className="w-10" src={logo} alt="logo" />
            <h3 className="font-bold text-xl text-white">HeroApps</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building the next generation of digital solutions. We create high-quality apps that solve real-world problems.
          </p>
        </div>

  
        <div className="text-white">
          <h4 className="font-semibold mb-4 border-b border-gray-700 pb-1 w-fit">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

  
        <div className="text-white">
          <h4 className="font-semibold mb-4 border-b border-gray-700 pb-1 w-fit">Contact</h4>
          <div className="text-gray-400 text-sm space-y-1">
            <p>Email: support@heroapps.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>
        </div>

      
        <div className="text-white">
          <h4 className="font-semibold mb-4 border-b border-gray-700 pb-1 w-fit">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaTwitter className="hover:text-blue-400 transition" /></a>
            <a href="#"><FaFacebook className="hover:text-blue-500 transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-blue-300 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-400 transition" /></a>
          </div>
        </div>

      </div>

      <hr className="border-gray-700 my-8" />

      <p className="text-gray-500 text-center text-sm">
        &copy; {new Date().getFullYear()} <span className="text-gray-300 font-medium">HeroApps</span>. All rights reserved.
      </p>

    </div>
  );
};

export default Footer;