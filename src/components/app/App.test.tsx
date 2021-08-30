import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Register Card Form" title', () => {
  render(<App />);
  const h1Element = screen.getByText(/Register Card Form/i);
  expect(h1Element).toBeInTheDocument();
});
