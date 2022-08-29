import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../hooks/http.hook';

const initialState = {
    pizzas: [],
    pizzasLoadingStatus: 'idle',
    activeFilter: 'Все'
}

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
    async () => {
        const {request} = useHttp();
        return await request("https://630760c2c0d0f2b8012df682.mockapi.io/pizzas");
    }
);

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        pizzaCreated: (state, action) => {state.pizzas.push(action.payload)},
        pizzaDeleted: (state, action) => {
            state.pizzas = state.pizzas.filter(item => item.id !== action.payload)
        },
        activeFilterChanged: (state, action) => {state.activeFilter = action.payload}
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, state => {state.pizzasLoadingStatus = 'loading'})
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.pizzasLoadingStatus = 'idle';
                state.pizzas = action.payload;
            })
            .addCase(fetchPizzas.rejected, state => {
                state.pizzasLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = pizzasSlice;

export default reducer;
export const {
    pizzasFetching,
    pizzasFetched,
    pizzasFetchingError,
    pizzaCreated,
    pizzaDeleted,
    activeFilterChanged
} = actions;