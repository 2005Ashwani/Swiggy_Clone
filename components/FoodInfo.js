import { useState } from "react"
import {addItems,IncrementItems,DecrementItems} from "./Stored/CardSlice"
import {useDispatch} from "react-redux"

export default function FoodInfo({ searchData }) {

    const [count, SetCount]=useState(0);
     const dispatch=useDispatch();

     function handleAddItems(params) {
        SetCount(1);
        dispatch(addItems(searchData))
     }

     function handleIncrementItems(params) {
          SetCount(count+1);
        dispatch(IncrementItems(searchData))
     }

     function handleDecrementItems(params) {
         SetCount(count-1);
        dispatch(DecrementItems(searchData))
     }

    return (
        <div className="flex w-full mb-4 mt-4 border-b pb-4 items-start">
            {/* Info Section */}
            <div className="flex-1">
                {/* Name */}
                <div className="text-2xl font-semibold mb-2">{searchData?.card?.info?.name}</div>
                {/* Price and Rating */}
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-black font-bold">₹{(searchData?.card?.info?.defaultPrice) / 100}</span>
                    <span className="text-green-600">{searchData?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                    <span className="text-gray-500">({searchData?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span>
                </div>
                {/* Description */}
                <div className="text-gray-600 text-xl">
                    {searchData?.card?.info?.description}
                </div>
            </div>
            {/* Image Section */}
                   <div className="w-[20%] relative">
                        <img className="h-36 w-full object-cover bg-white rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + searchData?.card?.info?.imageId} alt={searchData?.card?.info?.name}/>

                         {
                            count===0?(<button className="absolute bottom-1 left-20 shadow-md  text-green-600 px-6 py-2 bg-white border-2 border-gray-200 rounded-2xl text-2xl" onClick={()=>handleAddItems()} >ADD</button>):(
                             <div className="flex absolute bottom-1 left-20 gap-2  text-2xl text-green-600 px-6 py-2 bg-white border-2 border-gray-200 rounded-2xl ">
                            <button onClick={()=>handleDecrementItems()}>-</button>
                            <span>{count}</span>
                            <button onClick={()=> handleIncrementItems()}>+</button>

                            </div>
                            )
                        }


                        <hr className="mb-6 mt-2"></hr>
            </div>



        </div>
    );
}