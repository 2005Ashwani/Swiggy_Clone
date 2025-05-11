import RestHeader from "./RestHeader";
import { Outlet } from "react-router";

export default function SecondaryHome() {

    return(
        <>
        <RestHeader></RestHeader>
        {/* agar hum restaurant per ja raha hai to restaurant wala yha aa gyaga  */}
        {/* or agar hum RestaurantMenu per ja raha hai to wo wala yha aa jyaga  */}
        <Outlet></Outlet>   
        </>
    )
    
}