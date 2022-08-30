import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../hooks/http.hook';

const initialState = {
    pizzas: [],
    pizzasLoadingStatus: 'idle',
    activeFilter: 'Все',
    sortType: 'популярности'
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
        activeFilterChanged: (state, action) => {state.activeFilter = action.payload},
        activeSortTypeChanged: (state, action) => {state.sortType = action.payload},
        sortBy: (state, action) => {
            switch(action.payload) {
                case 'популярности': 
                    state.pizzas = state.pizzas.sort((a, b) => b.rating - a.rating);
                    break
                case 'цене':
                    state.pizzas = state.pizzas.sort((a, b) => a.price - b.price);
                    break
                case 'алфавит': 
                    state.pizzas = state.pizzas.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    });
                    break
                default:
                    state.pizzas = state.pizzas.sort((a, b) => b.rating - a.rating);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, state => {state.pizzasLoadingStatus = 'loading'})
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.pizzasLoadingStatus = 'idle';
                state.pizzas = action.payload.sort((a, b) => b.rating - a.rating);
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
    activeFilterChanged,
    activeSortTypeChanged,
    sortBy
} = actions;