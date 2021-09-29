import * as z from 'zod';
import Category from './category'
import Language from './language'
import Platform from './platform'
import StreamerId from './streamerId'

export const Stream = z.object({
  streamer: StreamerId,
  url: z.string().url(),
  platform: Platform,
  language: Language,
  category: Category,
  description: z.string(),
  visibility: z.enum(['public', 'private']),
});

export type Stream = z.infer<typeof Stream>;
export default Stream;
