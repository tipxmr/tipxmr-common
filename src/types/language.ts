import * as z from 'zod';

export const Language = z.object({
  id: z.string(),
  title: z.string()
});

export type Language = z.infer<typeof Language>;

export default Language;
