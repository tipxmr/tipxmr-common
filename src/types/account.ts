import * as z from 'zod';
import StreamerId from './streamerId'

export const Account = z.object({
  streamer: StreamerId, // TODO create separate streamer ID thingy
  timestamp: z.date(),
  status: z.enum(['active', 'closed']),
});

export type Account = z.infer<typeof Account>;
export default Account
