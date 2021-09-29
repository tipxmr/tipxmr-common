import * as z from "zod"
import StreamerId from './streamerId'


export const Animation = z.object({
  id: z.string(), // TODO write regex
  streamer: StreamerId,
  size: z.number(),
  color: z.string(),
});

export type Animation = z.infer<typeof Animation>

export default Animation
