import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Check Hello message', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
