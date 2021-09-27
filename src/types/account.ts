import * as z from 'zod';
import Streamer from './streamer'

export const Account = z.object({
  streamer: Streamer, // TODO create separate streamer ID thingy
  timestamp: z.date(),
  status: z.enum(['active', 'closed']),
});

export type Account = z.infer<typeof Account>;
export default Account
