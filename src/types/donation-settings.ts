import * as z from 'zod';
import StreamerId from './streamerId'

export const DonationSettings = z.object({
  streamer: StreamerId,
  secondPrice: z.number(),
  charPrice: z.number(),
  charLimit: z.number(),
  minAmount: z.number(),
  gifsMinAmount: z.number(),
  goal: z.number(),
  goalProgress: z.number(),
  goalReached: z.number(),
});

export type DonationSettings = z.infer<typeof DonationSettings>;
export default DonationSettings;
