import { render } from '@testing-library/react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

type ProvidersProps = {
  children?: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate={`%s | Vite + React + TS`}
        defaultTitle="Vite + React + TS"
      />

      {children}
    </HelmetProvider>
  );
}

const customRender = (
  ui: Parameters<typeof render>[0],
  options?: Parameters<typeof render>[1]
) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
