import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type GetVersionResponse = string;

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getVersion: builder.query<GetVersionResponse, void>({
      query: () => ({
        url: '/version',
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

export const { useGetVersionQuery } = dashboardApi;
