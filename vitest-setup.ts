import * as matchers from 'vitest-axe/matchers';
import { expect } from 'vitest';
import 'vitest-axe/extend-expect';

import * as jestDomMatchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

expect.extend(jestDomMatchers);
