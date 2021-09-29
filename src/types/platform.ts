import * as z from 'zod';

export const Platform = z.object({
  id: z.string(),
  title: z.string(),
});

export type Platfrom = z.infer<typeof Platform>;
export default Platform;
