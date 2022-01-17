import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {catApi} from 'services/catsService';
import catsReducer from './catsReducer';

export const store = configureStore({
  reducer: {
    [catApi.reducerPath]: catApi.reducer,
    cats: catsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(catApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
