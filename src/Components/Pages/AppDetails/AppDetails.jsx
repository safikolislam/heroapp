import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../../assets/icon-downloads.png"
import ratingIcon  from "../../../assets/icon-ratings.png"
import reviewIcon from "../../../assets/icon-review.png"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppDetails = () => {
 const allApps = useLoaderData();
 console.log(allApps);
 const {id} = useParams();
 const specificApp = allApps.find(app=>app.id === parseInt(id));
const {image,title,ratings,downloads,description,companyName,
  ratingAvg,reviews,size} = specificApp;
  const formattedDownloads = Intl.NumberFormat("en-us", {
   notation: "compact",
  }).format(downloads);


  const formattedReviews = Intl.NumberFormat("en-us", {
    notation: "compact",
  }).format(reviews);
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
           <button className="btn bg-[#00D390] text-white rounded-md p-5 mt-5"> 
            Install Now ({ size} MB)</button>
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










