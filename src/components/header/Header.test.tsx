import { render } from '@testing-library/react';
import Header from './Header';

test('Should render an "open menu burger button"', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId(/open_menu_button/i).tagName).toBe('BUTTON');
});

test('Should render a logo', () => {
  const { queryByTestId } = render(<Header />);
  expect(queryByTestId(/logo/i)).toBeTruthy();
});