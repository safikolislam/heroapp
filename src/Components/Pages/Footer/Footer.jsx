import logo from "../../../assets/logo.png"

const Footer = () => {
    return (
        <div className="bg-[#001931] w-full h-auto p-5">
            <div className="flex items-center gap-2 ml-5">

            <img className="w-10" src={logo} alt="" />
            <h3 className="text-white">HeroApp</h3>
            </div>
           <hr className="text-gray-600 m-5"></hr>
           <p className="text-white text-center"><small>&copy; HeroApp All right reserved</small></p>
        </div>
    );
};

export default Footer;