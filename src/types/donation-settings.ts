import * as z from 'zod';

export const DonationSettings = z.object({
  streamer: z.string(),
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
