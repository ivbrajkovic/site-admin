import { z } from 'zod';

export const createFormValidation = z.object({
  tag: z
    .string()
    .min(4, { message: 'Tag must be at least 4 characters long.' })
    .regex(/^[a-zA-Z0-9]*$/, {
      message: 'Tag must not contain special characters.',
    }),
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(1, 'Name is required'),
  url: z.string().url('Invalid URL'),
});
