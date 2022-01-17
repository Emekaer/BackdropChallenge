import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cat} from 'utils/types';
import type {RootState} from './store';

interface CatState {
  cats: Cat[] | any;
  favourites: Cat[] | any;
}

// Define the initial state using that type
const initialState: CatState = {
  cats: [],
  favourites: [],
};

export const catSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Cat>) => {
      state.favourites = [...state.favourites, action.payload];
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter(
        (cat: Cat) => cat.id !== action.payload,
      );
    },
  },
});

export const {addFavourite, removeFavourite} = catSlice.actions;

export default catSlice.reducer;
