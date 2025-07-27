import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { mockSocialPosts } from '@/mocks/socialData';

export const socialApi = createApi({
  reducerPath: 'socialApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getSocialPosts: builder.query({
      queryFn: async () => {
        return { data: mockSocialPosts };
      },
    }),
  }),
});

export const { useGetSocialPostsQuery } = socialApi;
