import * as z from 'zod';
import StreamerId from './streamerId'

// --- Streamer
export const Wallet = z.object({
  streamer: StreamerId,
  restoreHeight: z.number(),
  lastSyncHeight: z.number(),
});

export type Wallet = z.infer<typeof Wallet>;

export default Wallet;
