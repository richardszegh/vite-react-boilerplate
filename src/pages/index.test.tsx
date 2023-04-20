import { render, screen } from '@/test-utils';

import { Home } from './index';

describe('Home', () => {
  test('renders without error', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Home/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
