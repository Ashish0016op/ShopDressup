import { createSlice } from '@reduxjs/toolkit'

const subMenuSlice= createSlice({
    name:"menu",
    initialState:{
        MenuDetails:[],
    },
    reducers:{
        setSubMenu:(state,actions)=>{
            state.MenuDetails=actions.payload;
        },
        removeSubMenu:(state)=>{
            state.MenuDetails=[];
        },
        
    }
});
export const {setSubMenu,removeSubMenu}=subMenuSlice.actions
export default subMenuSlice.reducer;