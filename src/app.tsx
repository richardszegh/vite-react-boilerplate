import { RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { router } from './router';

function App() {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate={`%s | Vite + React + TS`}
        defaultTitle="Vite + React + TS"
      />

      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export { App };
