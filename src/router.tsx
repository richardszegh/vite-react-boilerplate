import { createBrowserRouter } from 'react-router-dom';

import { Home } from '@/pages/index';

const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
  },
]);

export { router };
