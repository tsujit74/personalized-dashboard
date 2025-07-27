import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query({
      query: (category: string) => `news?category=${category}`,
    }),
  }),
});

export const { useGetTopHeadlinesQuery } = newsApi;
