import { z } from 'zod';
import { customErrorMap } from '../zod/zop-setup';
import '@testing-library/jest-dom';

z.setErrorMap(customErrorMap);
