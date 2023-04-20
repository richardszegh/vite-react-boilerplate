import { QueryClient } from '@tanstack/react-query';
import type { DefaultOptions } from '@tanstack/react-query';

export const reactQueryDefaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: import.meta.env.MODE === 'production',
    retry: 3,
  },
  mutations: {
    retry: 3,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: reactQueryDefaultOptions,
});
