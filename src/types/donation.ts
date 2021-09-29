import * as z from 'zod';
import StreamerId from './streamerId'

export const Donation = z.object({
  id: z.string(),
  timestamp: z.date(),
  streamer: StreamerId,
  donor: z.string(),
  amount: z.number(),
  subaddress: z.string(),
  confirmations: z.number(),
  message: z.string(),
  displayTimeSeconds: z.number(),
  giphyUrl: z.string().url(),
});

export type Donation = z.infer<typeof Donation>;
export default Donation
