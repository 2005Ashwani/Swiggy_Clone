import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import RestaurantMenu from "./Components/RestaurantMenu";
import { BrowserRouter, Routes, Route } from "react-router";
import SearchFood from "./SearchFood";
import SecondaryHome from "./Components/SecondaryHome";
import Stores from "./Components/Stored/Stores";
import { Provider } from 'react-redux';
import Checkout from "./Components/Checkout";

function App(){
    
    return(
       <>
       <Provider store={Stores}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        {/* Nested bana diya taki isma header aa shaka (agar in tino main shi koi vi operation perform kar raha ho to firstly SecondaryHome per jana hoga   ) */}
        <Route element={<SecondaryHome></SecondaryHome>}>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        <Route path="city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>

      </Routes>
      </BrowserRouter>

       </Provider>
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



// Proxy server "https://cors-anywhere.herokuapp.com/"; 


