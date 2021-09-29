import * as z from 'zod'

export const StreamerId = z.string().length(12).regex(/[a-zA-Z0-9]/)

export type StreamerId = z.infer<typeof StreamerId>
export default StreamerId
