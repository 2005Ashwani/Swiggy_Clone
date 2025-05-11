import {useSelector} from "react-redux"
import { Link } from "react-router";
export default function RestHeader() {

            const counter = useSelector(state=>state.Cartslicer.count);
    
    return(
        
        <div className="flex justify-around bg-white fixed top-0 w-full h-15 z-50 pt-5">
            <div className="flex gap-10"> 
                <img className="h-10 w-20 bg-orange-500" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                <h1 className="font-bold ">Other</h1>
            </div>

            <div className="flex gap-10">
                <div className="font-bold">Swiggy Corporate</div>
                <div className="flex">
                    <div>
                    <svg
                        className="w-5 h-5 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="8" />
                         <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg> 
                    </div>
                    <div className="font-bold ml-2">Search</div>
                </div>
                <div className="flex">
                    <div>
                    <svg
                        className="w-5 h-5 text-gray-700 hover:text-red-600 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.59 13.41l-7.59 7.59a2 2 0 01-2.83 0L3 14.83V4h10.83l6.76 6.76a2 2 0 010 2.83z" />
                        <circle cx="7.5" cy="7.5" r="1.5" />
                    </svg>
                    </div>
                    <div className="font-bold ml-2">Offer</div>
                </div>

                <div className="flex">
                    <div>
                    <svg
                        className="w-5 h-5 text-gray-700 hover:text-purple-600 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18h.01" />
                        <path d="M12 14a4 4 0 10-4-4" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                    </div>
                     <div className="font-bold ml-2">Help</div>
                </div>

                <div className="flex">
                    <div>
                    <svg
                        className="w-5 h-5 text-gray-700 hover:text-green-600 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                        <path d="M10 17l5-5-5-5" />
                        <path d="M15 12H3" />
                    </svg>
                    </div>
                <div className="font-bold ml-2">SignIn</div>
                </div>

                <div className="flex">
                <div >
                <svg
                    className="w-5 h-5 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-1.3 5.3a1 1 0 001 .7h11.6a1 1 0 001-.7L21 13M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                </div>

                <Link to={"/checkout"}>
                <div className="font-bold pl-1.5">Cart {`(${counter})`}</div>
                
                </Link>
                </div>
               
            </div>


        </div>
    )
    
}