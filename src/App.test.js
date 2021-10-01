import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Home';
import Category from './Category';

test('renders Home component', () => {
  render(<App/>);
  const textElement = screen.getByText(/Home page/i);
  expect(textElement).toBeInTheDocument();
});
test('renders Category component', () => {
  render(<App/>);
  render(<Category/>);
  const categoryList = screen.getByText(/Boots/i);
  expect(categoryList).toBeInTheDocument();
});
