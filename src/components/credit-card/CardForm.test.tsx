import { render } from '@testing-library/react';
import CardForm from './CardForm';

test('Should render a Form element', () => {
  const { getByTestId } = render(<CardForm />);
  expect(getByTestId(/card_form/i).textContent).toBeTruthy();
});

test('Should render a cardnumber input field', () => {
  const { getByTestId } = render(<CardForm />);
  expect(getByTestId(/card_number_field/i).tagName).toBe('INPUT');
});

test('Should render a cvcNumber input field', () => {
  const { getByTestId } = render(<CardForm />);
  expect(getByTestId(/cvc_number_field/i).tagName).toBe('INPUT');
});

test('Should render a expiryDate input field', () => {
  const { getByTestId } = render(<CardForm />);
  expect(getByTestId(/expiry_date_field/i).tagName).toBe('INPUT');
});

test('Should render a submit button', () => {
  const { getByTestId } = render(<CardForm />);
  expect(getByTestId(/submit_button/i).tagName).toBe('BUTTON');
});

test('Should render a submit button with a "disabled" attribute', () => {
  const { getByTestId } = render(<CardForm />);
  expect(
    getByTestId(/submit_button/i)
      .getAttributeNames()
      .find((attr) => attr === 'disabled')
  ).toBe('disabled');
});

test('Should render a Card Shape', () => {
  const { queryByTestId } = render(<CardForm />);
  expect(queryByTestId(/card_shape/i)).toBeTruthy();
});
