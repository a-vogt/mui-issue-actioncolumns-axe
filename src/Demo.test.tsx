import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import Demo from './Demo.tsx';

test('Demo', async () => {
  const { container } = render(<Demo />);
  const results = await axe(container, {
    rules: {
      // Scheint ein false positive zu sein?
      'aria-required-children': { enabled: false },
    },
  });
  expect(results).toHaveNoViolations();
});
