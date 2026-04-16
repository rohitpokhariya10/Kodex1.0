import { createSlice } from "@reduxjs/toolkit";
import { storage } from "../../utils/localStorage";

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    //localStorage se products get
    cartItems: storage.get("products") || [],
  },
  reducers: {
    addToCart: (state, action) => {
     let {id} = action.payload
     let isExist = state.cartItems.find((elem)=> elem.id === id)
     if(isExist){
        isExist.quantity += 1
     }
     else{
      state.cartItems.push({...action.payload , quantity : 1});//
      storage.set("products", state.cartItems); //localStorage me products store
     }
    },
    removeFromCart: (state, action) => {
      console.log(action.payload.id);
      //
      state.cartItems = state.cartItems.filter((product) => {
        return product.id !== action.payload.id;
      });
      storage.set("products", state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
