import * as z from 'zod';

export const Account = z.object({
  streamer: z.string(),
  timestamp: z.date(),
  status: z.string(),
});

export type Account = z.infer<typeof Account>;
export default Account
