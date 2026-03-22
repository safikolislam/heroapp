import { createBrowserRouter } from "react-router";
import Roots from "../Components/Roots/Roots";
import Home from "../Components/Pages/Home/Home";
import Apps from "../Components/Pages/Apps/Apps";
import Installation from "../Components/Pages/Installation/Installation";
import NotFound from "../Components/NotFound";
import AppDetails from "../Components/Pages/AppDetails/AppDetails";
import AnimationLoading from "../Components/AnimationLoading";




export const router = createBrowserRouter([
  {
    path:"/",
  
    Component:Roots,

     
     children:[
        {
            index:true,
              loader:()=>fetch("Apps.json").then(res=>res.json()),
                  hydrateFallbackElement:<AnimationLoading></AnimationLoading>,
            Component:Home
        },
        {
          path:"Apps",
          loader:()=>fetch("Apps.json").then(res=>res.json()),
          Component:Apps,
          hydrateFallbackElement:<AnimationLoading></AnimationLoading>
        },
          {
            path: "AppDetails/:id",
              loader:()=>fetch("/Apps.json").then(res=>res.json()),
              Component:AppDetails,
              hydrateFallbackElement:<AnimationLoading></AnimationLoading>
          },
        {
          path:"Installation",
          Component:Installation,
        }
     
     
     ]
  
  },
     {
      path:"*",
      Component:NotFound
     }
])