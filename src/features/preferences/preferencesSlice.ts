import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PreferencesState {
  categories: string[];
  darkMode: boolean;
  favorites: any[];
}

const initialState: PreferencesState = {
  categories: ['technology'],
  darkMode: false,
  favorites: [],
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    addToFavorites: (state, action: PayloadAction<any>) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setCategories,
  toggleDarkMode,
  addToFavorites,
  removeFromFavorites,
} = preferencesSlice.actions;

export default preferencesSlice.reducer;
