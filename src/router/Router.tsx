import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { Dashboard } from 'apps/Dashboard/Dashboard';
import { Shortlink } from 'apps/Shortlink/Shortlink';
import { route } from 'router/route';

const router = createBrowserRouter(
  [
    {
      index: true,
      Component: Dashboard,
    },
    {
      path: route.shortlink,
      Component: Shortlink,
    },
    {
      // Catch all unmatched routes and redirect to the root route
      path: '*',
      element: <Navigate to="/" replace={true} />,
    },
  ],
  {
    basename: import.meta.env.VITE_BASENAME,
  },
);

export const Router = () => <RouterProvider router={router} />;
