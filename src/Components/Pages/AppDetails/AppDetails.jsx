import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../../assets/icon-downloads.png"
import ratingIcon  from "../../../assets/icon-ratings.png"
import reviewIcon from "../../../assets/icon-review.png"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



const AppDetails = () => {
 const allApps = useLoaderData();

 const {id} = useParams();


 const specificApp = allApps.find(app=>app.id === parseInt(id));
const {image,title,ratings,downloads,description,companyName,
  ratingAvg,reviews,size} = specificApp;

const [installed,setInstalled] = useState(false)

useEffect(()=>{
  const savedApps = JSON.parse(localStorage.getItem("Installed-apps") || "[]")
  const exists = savedApps.find((app)=>app.id===parseInt(id));
  if(exists)setInstalled(true)
},[id])

const handleInstall = () => {
  const savedApps = JSON.parse(localStorage.getItem("Installed-apps") || "[]");
 if(!savedApps.find(app=>app.id === specificApp.id)){
 
  const updatedApps = [...savedApps,specificApp];
  localStorage.setItem("Installed-apps",JSON.stringify(updatedApps))
  setInstalled(true)
 toast.success(`${title} Successfully Installed `)
 }
}

  const formattedDownloads = Intl.NumberFormat("en-us", {
   notation: "compact",
  }).format(downloads);


  const formattedReviews = Intl.NumberFormat("en-us", {
    notation: "compact",
  }).format(reviews);

if(!specificApp) return <p>loading...</p>
    return (
        <div className="min-h-screen">
           <div className="flex gap-10 flex-col md:flex-row p-5">
               <img className="w-70 bg-white p-10 ml-5 rounded-md"
                src={image} alt="" />
                <div>
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <p>Developed by <span className="text-purple-500">{companyName}</span></p>
                    <hr className="text-gray-400 mt-10 mb-10"></hr>
                    <div className="grid grid-cols-3 gap-10">
                    <div className="flex flex-col space-y-2">
                          <img className="w-10" src={downloadIcon} alt="" />
                          <p className="text-black"><small>Downlaods</small></p>
                          <h1 className="font-bold text-black text-2xl">{formattedDownloads}</h1>

                    </div>
                    <div className="flex flex-col space-y-2">
                      <img className="w-10" src={ratingIcon} alt="" />
                      <p className="text-black"><small>Average Ratings</small></p>
                     <h1 className="font-bold text-2xl">{ratingAvg}</h1>
                    </div>
                    <div className="flex flex-col space-y-2">
                     <img  className="w-10" src={reviewIcon} alt="" />
                     <p className="text-black"><small>Total Reviews</small></p>
                     <h1 className="font-bold text-2xl">{formattedReviews}</h1>
                    </div>
                    </div>
           <button onClick={handleInstall}  disabled={installed}  className="btn bg-[#00D390] text-white rounded-md p-5 mt-5"> 
          {installed ? "installed" : `install ( ${size} MB)`}</button>
                </div>
     
           </div>
           <hr className="text-gray-400 mx-5"></hr>
           <ResponsiveContainer className="p-5" width="100%" height={300}>
                 <BarChart layout="vertical" width="100%" height ={300} data={ratings}>
            <XAxis dataKey="count"  type="number"></XAxis>
            <YAxis dataKey="name" type="category"></YAxis>
            <Bar dataKey="count" fill="#00D390"></Bar>
            <Tooltip cursor={false}></Tooltip>
            </BarChart>
           </ResponsiveContainer>
           <hr className="mt-10 m-4 text-gray-400 "></hr>
           <h3 className="font-bold ml-5">Description</h3>
           <p className="ml-5 text-gray-400">{description}</p>
        </div>
    );
};

export default AppDetails;










