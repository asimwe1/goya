import { RouterContext } from 'next/dist/shared/lib/router-context'; // Import from next package
import { render } from '@testing-library/react';

const mockRouter = {
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

export const renderWithRouter = (ui) => {
  return render(<RouterContext.Provider value={mockRouter}>{ui}</RouterContext.Provider>);
};
