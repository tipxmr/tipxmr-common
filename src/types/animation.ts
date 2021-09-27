import * as z from "zod"


export const Animation = z.object({
  id: z.string(), // TODO write regex
  streamer: z.string(),
  size: z.number(),
  color: z.string(),
});

export type Animation = z.infer<typeof Animation>

export default Animation
