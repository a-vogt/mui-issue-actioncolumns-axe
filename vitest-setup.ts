import * as matchers from 'vitest-axe/matchers';
import { expect } from 'vitest';
import 'vitest-axe/extend-expect';
import '@testing-library/jest-dom';
import matcher from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

expect.extend(matcher);
