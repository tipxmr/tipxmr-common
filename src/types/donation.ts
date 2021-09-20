import * as z from 'zod';

export const Donation = z.object({
  id: z.string(),
  amount: z.number(),
  message: z.string(),
  displayTimeSeconds: z.number(),
  subaddress: z.string(),
  confirmations: z.number(),
  gif: z.string(),
});

export type Donation = z.infer<typeof Donation>;
export default Donation
