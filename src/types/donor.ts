import * as z from "zod"
import Streamer from "./streamer.ts"

export const Donor = z.object({
  donationId: z.string(),
  toStreamer: z.object(Streamer),
})

export type Donor = z.infer<typeof Donor>
export default Donor
