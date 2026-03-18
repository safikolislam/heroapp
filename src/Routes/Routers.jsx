import { createBrowserRouter } from "react-router";
import Roots from "../Components/Roots/Roots";
import Home from "../Components/Pages/Home/Home";
import Apps from "../Components/Pages/Apps/Apps";
import Installation from "../Components/Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path:"/",
     Component:Roots,
     children:[
        {
            index:true,
            Component:Home
        },
        {
          path:"Apps",
          loader:()=>fetch("Apps.json").then(res=>res.json()),
          Component:Apps,
          hydrateFallbackElement:<h2>Loading...</h2>
        },
        {
          path:"Installation",
          Component:Installation
        }
     ]
  }
])