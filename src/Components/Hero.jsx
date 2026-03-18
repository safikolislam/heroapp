import playstorelogo from "../assets/playstore.png"
import appstorelogo from "../assets/appstore.png"
import heroimage from "../assets/hero.png"

const Hero = () => {
    return (
        <div>
            <h2 className="mt-20 font-bold text-black text-4xl text-center">We Build </h2>
            <h2 className="font-bold text-4xl text-center"><span className="text-[#632EE3]">Productive </span>Apps</h2>
            <p className="text-gray-400 p-5 text-center">At HeroApps, we craft innovative apps designed
                to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="flex gap-5 mt-5 justify-center ">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" ><button className="btn flex items-center gap-1"><span><img className="w-5" src={playstorelogo} alt="" /></span>Google Play</button></a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><button className="btn flex items-center gap-1"><span><img className="w-5" src={appstorelogo} alt="" /></span> App Store</button></a>
            </div>

            <div className="flex mt-5 justify-center">
                <img className="w-200 lg:w-250 mt-5" src={heroimage} alt="heroimage" />
            </div>

          
            <div className="bg-linear-to-r from-purple-700 via-purple-500 to-indigo-500 w-full h-auto text-white p-15 flex flex-col items-center">
                <h2 className="text-4xl mb-10">Trusted by Millions, Built for You</h2>
                <div className="flex flex-col sm:flex-row w-full max-w-full gap-10 items-start">

                    <div className="flex-1 flex flex-col items-center gap-3 ">
                        <p ><small>Total Downloads</small></p>
                        <h1 className="text-4xl">29.6M</h1>
                        <p>21% More Than Last Month</p>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                        <p><small>Total Reviews</small></p>
                        <h1 className="text-4xl">906k</h1>
                        <p>46% More Than Last Month</p>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                        <p><small>Active Apps</small></p>
                        <h1 className="text-4xl">132+</h1>
                        <p>31 More will Launc</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;