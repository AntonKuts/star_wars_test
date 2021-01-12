import React from 'react';
import { render, screen } from '@testing-library/react';
import StarWarsTest from './StarWarsTest';

test('renders learn react link', () => {
  render(<StarWarsTest />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
