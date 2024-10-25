"use client"
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserReducer from './Slices/UserSlice';
import allProductReducer from './Slices/allProducts'
import AddCartReducer from './Slices/addToCart'
// import CandidateReducer from './GetCareerDetails'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ["currUser", "cart"], 
};
const rootReducer = combineReducers({
  currUser: UserReducer,
  cart: AddCartReducer,
  allproducts: allProductReducer,
});

// Apply persistReducer only to 'user' and 'cart' in rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };