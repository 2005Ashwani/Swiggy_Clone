 import { createSlice } from "@reduxjs/toolkit";

// example
// {
//     id:123,
//     name:Burger,
//     catagery:slicer

            // Introducing new field
            //   Quantity:1

// }

 const Cart=createSlice({
    name:'Cartslicer',
    initialState:{
        // Array => Because hum multiple object vaj paya  item1(Burger) , item2(coldrink) pass as an object
        items:[],
        count:0,

    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push({...action.payload,Quantity:1})  // Adding an item 
            state.count++;
        },

        IncrementItems:(state,action)=>{
            const element=state.items.find(item=>item.id===action.payload.id)    // jo app data vaj raha ho wo action.payload kai under ata hai
            element.Quantity+=1;
            state.count++;


        },
        
        DecrementItems:(state,action)=>{
              const element=state.items.find(item=>item.id===action.payload.id)    // jo app data vaj raha ho wo action.payload kai under ata hai
              if (element.Quantity>1) {
                  element.Quantity-=1;
                }
                
            else{
                // Agar nhi hai too pura item ko remove karna padaga
                // Us item ko chod kar sara item filter out ho jyaga
                state.items=state.items.filter(item=>item.id!=action.payload.id)   // filter returns an array
            }
        state.count--;

                
        }

        
    }
 });

 export const {addItems,IncrementItems,DecrementItems}=Cart.actions;
 export default Cart.reducer;