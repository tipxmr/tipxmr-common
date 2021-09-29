import * as z from 'zod';
import StreamerId from './streamerId'

// --- Streamer
export const Streamer = z.object({
  id: StreamerId,
  name: z.string(),
  socket: z.string(),
  alias: z
    .string()
    .nonempty({ message: "Can't be empty" })
    .max(15, { message: 'Maximum length is 15 characters' })
    .min(4, { message: 'Minimum length is 4 characters' })
    .regex(/[a-zA-Z0-9]/, { message: 'No special characters' }),
});

export type Streamer = z.infer<typeof Streamer>;

export default Streamer;

// const alex = Streamer.parse({
//     name: "alexanarcho"
// });

// const alex = {
//     name: "alexanarcho"
// } as Streamer;
