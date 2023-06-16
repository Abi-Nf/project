import { render, screen } from '@testing-library/react';
import Synapso from '../Synapso';

test('renders learn react link', () => {
  render(<Synapso />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});