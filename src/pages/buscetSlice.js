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
            let current = state.order.find(item => item.id === action.payload.id)

            if (newItem) {
                current.count = current.count + 1;
                current.totalSum = current.totalSum + action.payload.price;
            } else {
                state.order =[...state.order, action.payload]
            }

            state.totalPrice = state.totalPrice + action.payload.price;
            state.totalCount = state.totalCount + action.payload.count;
        },
        plusOnePizza: (state, action) => {
            let current = state.order.find(item => item.id === action.payload);

            if (current.count < 20) {
                current.count = current.count + 1;
                current.totalSum = current.totalSum + current.price;
                state.totalPrice = state.totalPrice + current.price;
                state.totalCount = state.totalCount + 1;
            }
        },
        minusOnePizza: (state, action) => {
            let current = state.order.find(item => item.id === action.payload);

            if (current.count > 1) {
                current.count = current.count - 1;
                current.totalSum = current.totalSum - current.price;
                state.totalPrice = state.totalPrice - current.price;
                state.totalCount = state.totalCount - 1;
            }
        },
        deletePizza: (state, action) => {
            let current = state.order.find(item => item.id === action.payload);

            state.order = state.order.filter(item => item.id !== action.payload)
            
            state.totalPrice = state.totalPrice - current.totalSum;
            state.totalCount = state.totalCount - current.count;
        },
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
    plusOnePizza,
    minusOnePizza,
    deletePizza
} = actions;