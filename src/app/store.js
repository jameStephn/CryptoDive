import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { coinsApi } from '../services/coinsApi';
import { cryptoNewsApi } from "../services/cryptoNewsApi";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [coinsApi.reducerPath]: coinsApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK-Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsApi.middleware, cryptoNewsApi.middleware),
});

// Automatically setup listeners
setupListeners(store.dispatch);

export default store;
