import * as z from "zod"
import StreamerId from './streamerId'


export const Animation = z.object({
  id: z.string(), // TODO write regex
  streamer: StreamerId,
  size: z.number().max(250), // preliminary value
  color: z.string().max(10),
});

export type Animation = z.infer<typeof Animation>
export default Animation
