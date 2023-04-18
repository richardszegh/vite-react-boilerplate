import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATHS } from '@/config/route-paths.config';

import { RouteWrapper } from '@/components/utils/route-wrapper';
import { Layout } from '@/components/layouts/layout';
import { AuthGuard } from '@/components/auth/auth-guard';
import { GuestGuard } from '@/components/auth/guest-guard';

import { Home } from '@/pages/index';
import { SignIn } from '@/pages/sign-in';

const router = createBrowserRouter([
  {
    element: <RouteWrapper guard={AuthGuard} layout={Layout} />,
    children: [
      {
        path: ROUTE_PATHS.ROOT,
        element: <Home />,
      },
    ],
  },
  {
    path: ROUTE_PATHS.AUTH,
    element: <RouteWrapper guard={GuestGuard} layout={Layout} />,
    children: [
      {
        path: ROUTE_PATHS.SIGN_IN,
        element: <SignIn />,
      },
    ],
  },
]);

export { router };
