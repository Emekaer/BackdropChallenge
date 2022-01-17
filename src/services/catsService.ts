import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Cat} from 'utils/types';

import {BASE_URL, CATS_API_KEY} from 'react-native-dotenv';

// Define a service using a base URL and expected endpoints
export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {'x-api-key': CATS_API_KEY},
  }),
  endpoints: builder => ({
    getCatsByPage: builder.query<Cat, number>({
      query: page =>
        `search?limit=20&page=${page}&order=DESC&api_key=961c8e53-3025-4d53-8708-064c33fee863`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetCatsByPageQuery} = catApi;
