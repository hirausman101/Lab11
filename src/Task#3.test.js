
import { render, screen } from '@testing-library/react';
import App3 from './Task#3';

test('checks if list displayed', () => {
  render(<App3 />);
  const item = screen.getByText('Hira likes kiwi');
  expect(item).toBeInTheDocument();
});
