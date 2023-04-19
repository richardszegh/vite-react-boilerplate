import { render, screen } from '@testing-library/react';

import { App } from './app';

describe('App', () => {
  test('renders without error', () => {
    render(<App />);

    const heading = screen.getByRole('heading', {
      name: /Sign In/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
