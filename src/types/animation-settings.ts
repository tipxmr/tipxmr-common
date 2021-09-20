import * as z from "zod"

const Font = z.object({
  size: z.number(),
  color: z.string(), // TODO this is a hexcode
})
export const AnimationSettings = z.object({
  id: z.string(),

});

export type AnimationSettings = z.infer<typeof AnimationSettings>

export default AnimationSettings
