import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order: [],
    totalPrice: 0,
    totalCount: 0
}

const buscetSlice = createSlice({
    name: 'bascet',
    initialState,
    reducers: {
        addPizza: (state, action) => {
            const newItem = state.order.some(item => item.id === action.payload.id)
            if (newItem) {
                let current = state.order.find(item => item.id === action.payload.id)
                current.count = current.count + 1;
                current.price = current.price + current.price
            } else {
                state.order =[...state.order, action.payload]
            }
        },
        countTotalPrice: (state) => {
            state.totalPrice = state.order.reduce((item, sum) => item.price + sum, 0);
        },
        countTotalCount: (state) => {state.totalCount = state.order.length},
        deletePizza: (state, action) => {state.order = state.order.filter(item => item.id !== action.payload)},
        clearBuscet: (state) => {
            state.order = [];
            state.totalCount = 0;
            state.totalPrice = 0;
        }
    },
});

const {actions, reducer} = buscetSlice;

export default reducer;
export const {
    addPizza,
    countTotalPrice,
    clearBuscet,
    countTotalCount,
    deletePizza
} = actions;