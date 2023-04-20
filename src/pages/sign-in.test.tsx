import { render, screen } from '@/test-utils';

import { SignIn } from './sign-in';

describe('SignIn', () => {
  test('renders without error', () => {
    render(<SignIn />);

    const heading = screen.getByRole('heading', {
      name: /Sign In/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
