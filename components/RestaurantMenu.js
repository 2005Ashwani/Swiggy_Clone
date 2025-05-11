import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import MenuCard from "./MenuCard";
import Shimmer_Recomended from "./Shimmer_Recomended";

export default function RestaurantMenu() {
    const [Selected,SetSelected] = useState(null)

    let {id}=useParams();

    const [restdata,setrestdata]=useState([])
    useEffect(()=>{
    
        async function fetchData() {
           
           const proxyServer = "https://thingproxy.freeboard.io/fetch/";
           const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData= tempData.filter((items) => 'title' in items?.card?.card) 

           setrestdata(filterData)
        }

        
        fetchData();
       },[])
   // This is Shimmer Effect (TO MAKE FUL)
    if (restdata.length==0) {
        return(
                <Shimmer_Recomended></Shimmer_Recomended>
        )
        }


    

       
    return (
        <div>

            <div className="w-[80%] mt-20 mb-20 ml-20 mx-auto">
                <Link to={`/city/delhi/${id}/search`}>
                <p className="w-full text-center py-6 bg-gray-200 text-2xl rounded-2xl">Search For Dishes</p>
                </Link>
                
            </div>

        <div  className="w-[80%] mt-20 mb-20 ml-20 mx-auto">

        <button onClick={()=>SetSelected(Selected==='veg'?null:'veg')}  className={`text-2xl py-2 px-4 mr-2 border rounded-2xl ${Selected==="veg"? "bg-green-600":"bg-gray-300"}`}>Veg</button>
        <button onClick={()=>SetSelected(Selected==='nonveg'?null:'nonveg')} className={`text-2xl py-2 px-4 border rounded-2xl ${Selected==="nonveg"? "bg-red-500":"bg-gray-300"}`}>Non-veg</button>
        </div>

       <div className="w-[80%] mx-auto">
        {
            restdata.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} FoodSelected={Selected}></MenuCard>)
        }
        </div>
       </div>
    )
    
}