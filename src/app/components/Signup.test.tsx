import React from 'react';
import Signup from './Signup';
import { renderWithRouter } from './test-utils';
import '@testing-library/jest-dom';
import test from 'node:test';

test('renders Signup component', () => {
  const { getByText } = renderWithRouter(<Signup />);
  expect(getByText('Create New Account')).toBeInTheDocument();
});
