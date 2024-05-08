import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Shortlink = {
  id: number;
  tag: string;
  name: string;
  url: string;
};

type GetShortlinksResponse = Shortlink[];

export const shortlinkApi = createApi({
  reducerPath: 'shortlinkApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getShortlinks: builder.query<GetShortlinksResponse, void>({
      query: () => '/shortlinks',
    }),
  }),
});

export const { useGetShortlinksQuery, useLazyGetShortlinksQuery } =
  shortlinkApi;
