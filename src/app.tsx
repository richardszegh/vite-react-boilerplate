import { RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';

import { router } from './router';
import { queryClient } from './libs/react-query';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Helmet
          titleTemplate={`%s | Vite + React + TS`}
          defaultTitle="Vite + React + TS"
        />

        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export { App };
