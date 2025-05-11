import { useState } from "react"
import RestInfo from "./RestInfo"
export default function MenuCard({menuItems,FoodSelected}) {

    const [isOpen,setOpen]=useState(false)

    if ("categories" in menuItems) {
        return(
            <div>
                <p className="text-black text-2xl font-bold gap-2">{menuItems.title}</p>
                <div >{menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items} FoodSelected={FoodSelected}></MenuCard>)}</div>

            </div>
        )
        
    }

    if (FoodSelected==='veg') {
        return(
            <div> 
     

            <div className="w-full">
                <div className="flex justify-between w-full">
                <p className="text-black text-2xl font-bold">{menuItems.title}</p>
                <button className="text-5xl font-bold mr-20" onClick={()=>setOpen(!isOpen)}>{isOpen?'^':'˅'}</button>
    
                </div>           
                 <div>
    
                    {
                        menuItems?.itemCards?.filter((food)=>"isVeg" in food.card.info)?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                        
                    }
                    
                </div>
                <div className="h-5 bg-gray-200 mt-2 nb-2 "></div>
    
            </div>
         </div>
        )
    }

    if (FoodSelected==='no  nveg') {
        return(
            <div> 
     

            <div className="w-full">
                <div className="flex justify-between w-full">
                <p className="text-black text-2xl font-bold">{menuItems.title}</p>
                <button className="text-5xl font-bold mr-20" onClick={()=>setOpen(!isOpen)}>{isOpen?'^':'˅'}</button>
    
                </div>           
                 <div>
    
                    {
                        menuItems?.itemCards?.filter((food)=>!("isVeg" in food.card.info))?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                        
                    }
                    
                </div>
                <div className="h-5 bg-gray-200 mt-2 nb-2 "></div>
    
            </div>
         </div>
        )
    }

 

    if (isOpen) {
        return(

            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-black text-2xl font-bold">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setOpen(!isOpen)}>{isOpen?'^':'˅'}</button>

            </div>
            <div className="h-5 bg-gray-100 mt-2 nb-2 "></div>

        </div>
        )
        }

    return(
    <div> 
     

        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-black text-2xl font-bold">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setOpen(!isOpen)}>{isOpen?'^':'˅'}</button>

            </div>           
             <div>

                {
                    menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                    
                }
                
            </div>
            <div className="h-5 bg-gray-200 mt-2 nb-2 "></div>

        </div>
     </div>
    )
    
}