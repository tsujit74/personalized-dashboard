import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchBarState {
  query: string;
}

const initialState: SearchBarState = {
  query: '',
};

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchBarSlice.actions;
export default searchBarSlice.reducer;
