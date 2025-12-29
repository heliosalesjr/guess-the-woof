# Testing Guide

This project uses **Vitest** and **React Testing Library**.

## Running Tests
Run all tests:
```bash
npm test
```

## Writing Tests
Create files ending in `.test.jsx` alongside your components.

Example:
```jsx
// MyComponent.test.jsx
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders correctly', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```
