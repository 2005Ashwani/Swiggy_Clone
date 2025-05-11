import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CardSlice"

const store =configureStore({
    reducer:{
        Cartslicer:CartReducer,
    }
})

export default store;