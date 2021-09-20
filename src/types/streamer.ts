import * as z from 'zod';

const AnimationSettings = z.object({
  id: z.string(),
});

export const Streamer = z.object({
  id: z.string(),
  seed_hash: z.string(),
  user_name: z.string(),
  streamer_socket_id: z.string(),
  animation_settings: AnimationSettings.optional(),
  display_name: z.string(),
  is_online: z.boolean(),
  restore_height: z.number(),
});

export type Streamer = z.infer<typeof Streamer>;

export default Streamer;

// const alex = Streamer.parse({
//     name: "alexanarcho"
// });

// const alex = {
//     name: "alexanarcho"
// } as Streamer;

// export interface Streamer {
//   displayName: string;
//   userName: string;
//   isOnline: boolean;
//   _id: string;
//   secondPrice: number;
//   charPrice: number;
//   charLimit: number;
//   minAmount: number;
//   gifsMinAmount: number;
//   goalProgress: number;
//   goal: number;
//   goalReached: boolean;
//   streamUrl: string;
//   streamPlatform: string;
//   streamLanguage: string;
//   streamDescription: string;
//   streamCategory: string;
// }
