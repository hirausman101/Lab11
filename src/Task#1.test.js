import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Task1 from './Task#1';

test('renders learn react link', () => {
  render(<Task1 />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent('Hello World');
});
