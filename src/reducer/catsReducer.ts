import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cat} from 'utils/types';
import type {RootState} from './store';

type CatState = {
  cats: Cat[] | any;
  favourites: Cat[] | any;
};

// Define the initial state using that type
const initialState: CatState = {
  cats: [],
  favourites: [],
};

export const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Cat>) => {
      const catId = action.payload.id;

      if (state.favourites.findIndex((cat: Cat) => cat.id === catId) > -1) {
        const updatedArray = state.favourites.filter(
          (cat: Cat) => cat.id !== catId,
        );
        state.favourites = updatedArray;
      } else {
        state.favourites = [
          ...state.favourites,
          {url: action.payload.url, id: action.payload.id},
        ];
      }
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const updatedArray = state.favourites.filter((cat: Cat) => cat.id !== id);
      state.favourites = updatedArray;
    },
  },
});

export const {addFavourite, removeFavourite} = catSlice.actions;

export const favourites = (state: RootState) => state.cats.favourites;

export default catSlice.reducer;
