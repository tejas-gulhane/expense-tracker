import { createSlice } from "@reduxjs/toolkit";

const cartinitialstate = {
    iscartopen:false,
}

const cartslice = createSlice( {
name:'cartopen',

initialState:cartinitialstate,

reducers : {
    openCart(state) {
        state.iscartopen= !state.iscartopen
    }
}
})


export const cartActions = cartslice.actions
export default cartslice.reducer