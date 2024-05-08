import { configureStore } from '@reduxjs/toolkit';

import { dashboardApi } from 'apps/Dashboard/dashboardApi';
import { shortLinkSliceReducer } from 'apps/Shortlink/shortLinkSlice';
import { shortlinkApi } from 'apps/Shortlink/shortlinkApi';

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [shortlinkApi.reducerPath]: shortlinkApi.reducer,
    shortLink: shortLinkSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dashboardApi.middleware,
      shortlinkApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
