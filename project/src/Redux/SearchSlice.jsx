import { createSlice } from '@reduxjs/toolkit'

const searchSlice= createSlice({
    name:"search",
    initialState:{
        SearchField:false,
        cartProduct:[],

    },
    reducers:{
        setSearch:(state,actions)=>{
            state.SearchField=true
        },
        removeSetSerach:(state,actions)=>{
            state.SearchField=false
        },
        setCartProduct:(state,actions)=>{
            state.cartProduct=actions.payload
        }
        
    }
});
export const {setSearch,removeSetSerach,setCartProduct}=searchSlice.actions
export default searchSlice.reducer;