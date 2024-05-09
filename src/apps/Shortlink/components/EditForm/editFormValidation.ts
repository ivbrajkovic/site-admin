import { z } from 'zod';

export const editFormValidation = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(1, 'Name is required'),
  url: z.string().url('Invalid URL'),
});
