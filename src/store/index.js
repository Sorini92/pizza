import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { 
	persistStore, 
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER, 
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import pizzas from '../pages/pizzasSlice';
import buscet from '../pages/buscetSlice';

const rootReducer = combineReducers({
	pizzas, 
	buscet
})

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['pizzas']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
	devTools: process.env.NODE_ENV !== 'production', 
})

export const persistor = persistStore(store);