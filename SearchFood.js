

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import FoodInfo from "./Components/FoodInfo";

export default function SearchFood() {
    const { id } = useParams();
    const [food, Setfood] = useState("");
    const [RestData, SetRestData] = useState([]);
    const [searchFood, SetSearchFood] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://thingproxy.freeboard.io/fetch/";
            const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}`;
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
            SetRestData(tempData);
        }

        fetchData();
    }, [id]);

    // Filter based on search input
    useEffect(() => {
        if (food && RestData.length > 0) {
            const filteredItems = RestData.filter(item =>
                (item?.card?.info?.name || "").toUpperCase().includes(food)
            );
            SetSearchFood(filteredItems);
        } else {
            SetSearchFood([]);
        }
    }, [food, RestData]);

    console.log(searchFood)


    return (
        <div className="w-[80%] mx-auto mt-20">
            <input
                className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"
                placeholder="Search Here"
                onChange={(e) => Setfood(e.target.value.toUpperCase())}
            />
            <div className="flex flex-wrap w-[80%] mx-auto mt-8 gap-5" >
                {searchFood.map((item, index) => (
                    <FoodInfo key={item?.card?.info?.id || index} searchData={item} />
                ))}
            </div>
        </div>
    );
}
