import { useState } from "react"
import {addItems,IncrementItems,DecrementItems} from "./Stored/CardSlice"
import {useDispatch, useSelector} from "react-redux"



export default function RestInfo({restData}) {
     const dispatch=useDispatch();

     // Get the value of the Quantity Globally  ( Read directly from the Global)
     // Agar panner lokes 2 time than it will add same ( Both shows the same Quantity)
     const items=useSelector(state=>state.Cartslicer.items)
     const element=items.find(item=>item.id===restData.id)
     const count =element?element.Quantity:0;

     function handleAddItems(params) {
        
        dispatch(addItems(restData))
     }

     function handleIncrementItems(params) {

        dispatch(IncrementItems(restData))
     }

     function handleDecrementItems(params) {
         
        dispatch(DecrementItems(restData))
     }

    return(
        <>
        <div className="flex justify-between w-full mb-2 mt-2">
            <div className="w-[70%]">

                <p className="text-gray-700 font-semibold text-2xl mt-3">{restData?.name}</p>
                <p className="font-bold mt-2">{"₹"+(restData?.defaultPrice)/100}</p>
                <span className="pt-1.5 text-green-900">{restData?.ratings?.aggregatedRating?.rating}</span>
                <span className="pt-1.5">{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span> 
                <p className="mt-2 text-2xl flex">{restData?.description}/100</p>

            </div>
            <div className="w-[20%] relative">
                <img className="h-36 w-full object-cover bg-white rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId}></img>

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
        <hr></hr>
        </>
    )
}