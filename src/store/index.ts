import { configureStore } from '@reduxjs/toolkit';
import preferencesReducer from '@/features/preferences/preferencesSlice';
import { newsApi } from '@/features/news/newapi';
import { tmdbApi } from '@/features/movies/tmdbApi';
import { socialApi } from '@/features/social/socialApi';
import favoriteReducer from '@/features/favorites/favoritesSlice'
import searchBarReducer from '@/features/search/searchBarSlice'

export const store = configureStore({
  reducer: {
    preferences: preferencesReducer,
    favorites: favoriteReducer,
    searchBar: searchBarReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    [socialApi.reducerPath]: socialApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware,tmdbApi.middleware, socialApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
