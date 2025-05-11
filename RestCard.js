import { Link } from "react-router"
export default function RestCard({restInfo}){
   
    
    return (
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
            <div className="max-w-[280px] transform transition duration-200 hover:scale-95">
                <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
            <div className="w-[95%] mx-auto mt-4">
            <div className=" font-bold text-xl ">{restInfo?.info?.name}</div>
            <div className="flex gap-2 items-center">
                <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.385 2.461c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
            
            <span className="text-lg">{restInfo?.info?.avgRating}</span>
            <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
            </div>

            <div className="text-gray-600 h-8 text-xl overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
            <div className="text-gray-600 h-8 text-xl flex flex-wrap">{restInfo?.info?.locality}</div>


            </div>

        </div>
        </Link>
    )
}