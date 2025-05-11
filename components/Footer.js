import BestRest from "./BestRest"

import { useEffect, useState } from "react";

export default function Footer()
{
    const [RestData, setRestData] = useState();

 useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://thingproxy.freeboard.io/fetch/";
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9834&lng=77.706&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data?.data?.cards[6]?.card?.card);
     }

     fetchData();
    },[])


    return(
        <>
        <div>
            <img className="w-[100%] h-61" alt="Get the Swiggy App banner " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"></img>
        </div>

        <div>
            <h1>Cities with food delivery</h1>
            <div>
            {RestData.map((RestCity) => <BestRest key={RestCity.brands[0]} RestData={RestData} />)}
            </div>

        </div>

        <div>
            <h1>Cities with grocery delivery</h1>
          
        </div>
        </>
    )
}