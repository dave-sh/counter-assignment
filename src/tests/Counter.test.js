/* eslint-disable testing-library/no-render-in-setup */
// import necessary react testing library helpers here
// import the Counter component here
import {fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter.js';

beforeEach(() => {
  // Render the Counter component here
  render( <Counter> </Counter> );
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const e = screen.getByTestId('count');
  expect(e).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initial = screen.getByTestId('count');
  expect(initial).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const increment = screen.getByText('+');
  const counter = screen.getByTestId('count');

  fireEvent.click(increment);

  expect(counter).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByText('-');
  const counter = screen.getByTestId('count');

  fireEvent.click(decrement);

  expect(counter).toHaveTextContent('-1');
});
