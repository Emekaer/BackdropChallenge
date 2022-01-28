import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Cat} from 'types/types';

import {BASE_URL, CATS_API_KEY} from 'react-native-dotenv';

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {apiKey: CATS_API_KEY},
  }),
  endpoints: builder => ({
    getCatsByPage: builder.query<Cat[], number>({
      query: (page = 0) => `search?limit=20&page=${page}&order=DESC`,
    }),
  }),
});

export const {useGetCatsByPageQuery} = catApi;
