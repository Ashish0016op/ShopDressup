import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import subMenuSlice from "./SubMenuSlice";
import cartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        search: SearchSlice,
        menu: subMenuSlice,
        cartItem:cartSlice,
    }
});

export default store;
