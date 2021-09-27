import * as z from 'zod';

// --- Streamer
export const Wallet = z.object({
  streamer: z.string(),
  restoreHeight: z.number(),
  lastSyncHeight: z.number(),
});

export type Wallet = z.infer<typeof Wallet>;

export default Wallet;
