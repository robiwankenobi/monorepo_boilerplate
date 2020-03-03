import React from 'react';
import { render } from '@testing-library/react';

import Button from '../Button';

test('test default button interaction states', () => {
  const testContent = 'click me';
  const { getByText } = render(<Button>{testContent}</Button>);
  const button = getByText(testContent);
  expect(button).not.toBeDisabled();
  button.click();
  expect(button).toBeDisabled();
});
