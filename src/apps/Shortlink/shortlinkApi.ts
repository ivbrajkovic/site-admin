import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Shortlink = {
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

    createShortlink: builder.mutation<Shortlink, Partial<Shortlink>>({
      query: (body) => ({
        url: '/shortlinksX',
        method: 'POST',
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data: shortlink } = await queryFulfilled;
          dispatch(
            shortlinkApi.util.updateQueryData(
              'getShortlinks',
              undefined,
              (draft) => {
                draft.push(shortlink);
              },
            ),
          );
          // eslint-disable-next-line no-empty
        } catch {}
      },
    }),

    updateShortlink: builder.mutation<Shortlink, Shortlink>({
      query: ({ id, ...body }) => ({
        url: `/shortlinks/${id}`,
        method: 'PATCH',
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data: shortlink } = await queryFulfilled;
          dispatch(
            shortlinkApi.util.updateQueryData(
              'getShortlinks',
              undefined,
              (draft) => {
                const index = draft.findIndex((s) => s.id === shortlink.id);
                draft[index] = shortlink;
              },
            ),
          );
          // eslint-disable-next-line no-empty
        } catch {}
      },
    }),
  }),
});

export const {
  useGetShortlinksQuery,
  useLazyGetShortlinksQuery,
  useCreateShortlinkMutation,
  useUpdateShortlinkMutation,
} = shortlinkApi;
