import { createSlice } from '@reduxjs/toolkit'

const cartSlice= createSlice({
    name:"cartItem",
    initialState:{
        cartProduct:[],
        AddToCartItem:[],

    },
    reducers:{
        setCartProduct:(state,action)=>{
            state.cartProduct=action.payload
        },
        setAddToCart:(state,action)=>{
            state.AddToCartItem.push(action.payload);
        }
        
    }
});
export const {setCartProduct,setAddToCart}=cartSlice.actions
export default cartSlice.reducer;