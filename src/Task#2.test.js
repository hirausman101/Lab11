import { render, screen } from '@testing-library/react';
import App2 from './Task#2';

test('renders learn react link', () => {
  render(<App2 />);
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toHaveTextContent('Hello World');
});
