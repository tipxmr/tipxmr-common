import * as z from 'zod';

export const Donation = z.object({
  id: z.string(),
  timestamp: z.date(),
  streamer: z.string(),
  donor: z.string(),
  amount: z.bigint(),
  subaddress: z.string(),
  confirmations: z.number(),
  message: z.string(),
  displayTimeSeconds: z.number(),
  giphyUrl: z.string(),
});

export type Donation = z.infer<typeof Donation>;
export default Donation
