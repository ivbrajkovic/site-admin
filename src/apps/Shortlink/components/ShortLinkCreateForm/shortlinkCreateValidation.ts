import * as z from 'zod';

export const shortlinkCreateValidation = z.object({
  tag: z.string().min(4, 'Tag must be at least 4 characters long'),
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(1, 'Name is required'),
  url: z.string().url('Invalid URL'),
});
