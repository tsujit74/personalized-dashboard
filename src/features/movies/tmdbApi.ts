import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const TMDB_API_KEY = '66449ccc5420d60999a8067e6fabfead'; // ✅ paste your key

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () =>
        `movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    }),
  }),
});

export const { useGetPopularMoviesQuery } = tmdbApi;
