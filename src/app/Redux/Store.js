"use client"
import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './Slices/UserSlice';
// import BlogReducer from './getBlogSlice'

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
};

const persistedReducer = persistReducer(persistConfig, UserReducer);

const store = configureStore({
  reducer: {
    currUser: persistedReducer,
    // blogs: BlogReducer,
    // candidateDetail:CandidateReducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };