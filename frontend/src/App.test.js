import { render, screen } from '@testing-library/react';
import ProductLayout from './Products/components/ProductLayout';

test('renders learn react link', () => {
  render(<ProductLayout />);
  const linkElement = screen.getByText(/Products App/i);
  expect(linkElement).toBeInTheDocument();
});
