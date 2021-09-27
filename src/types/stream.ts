import * as z from 'zod';
import Streamer from './streamer'


// --- Streamer
export const Stream = z.object({
  streamer: Streamer,
  url: z.string().url(),
  platform: z.enum(['twitch', 'youtube', 'chaturbate', 'selfHosted']),
  language: z.enum(['english', 'german', '...']),
  category: z.string(),
  description: z.string(),
  visibility: z.enum(['public', 'private']),
});

export type Stream = z.infer<typeof Stream>;

export default Stream;
