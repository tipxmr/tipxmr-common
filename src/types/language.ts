import * as z from 'zod';

export const Language = z.object({
  id: z.string(), // ⚠️ tbd
  title: z.string()
});

export type Language = z.infer<typeof Language>;

export default Language;
