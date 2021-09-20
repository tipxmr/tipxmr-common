import * as z from "zod"
import Streamer from "./streamer"

export const Donor = z.object({
  donationId: z.string(),
  toStreamer: Streamer,
})

export type Donor = z.infer<typeof Donor>
export default Donor
