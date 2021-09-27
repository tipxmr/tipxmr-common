import * as z from 'zod';

export const Category = z.object({
  id: z.string(), // ⚠️ tbd
  title: z.string(),
});

export type Category = z.infer<typeof Category>;
export default Category;
