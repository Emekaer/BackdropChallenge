import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cat} from 'types/types';
import type {RootState} from './store';

type CatState = {
  cats: Cat[] | any;
  favourites: Cat[] | any;
};

const initialState: CatState = {
  cats: [],
  favourites: [],
};

export const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    addCats: (state, action: PayloadAction<Cat[] | undefined>) => {
      action.payload && state.cats.push(...action.payload);
    },
    addFavourite: (state, action: PayloadAction<Cat>) => {
      const catId = action.payload.id;

      if (state.favourites.findIndex((cat: Cat) => cat.id === catId) > -1) {
        state.favourites = state.favourites.filter(
          (cat: Cat) => cat.id !== catId,
        );
      } else {
        state.favourites = [
          ...state.favourites,
          {url: action.payload.url, id: action.payload.id},
        ];
      }
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.favourites = state.favourites.filter((cat: Cat) => cat.id !== id);
    },
  },
});

export const {addFavourite, removeFavourite, addCats} = catSlice.actions;

export const favourites = (state: RootState) => state.cats.favourites;

export default catSlice.reducer;
