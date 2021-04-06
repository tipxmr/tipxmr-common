import * as z from 'zod';

const AnimationSettings = z.object({
    color: z.string()
});

export const Streamer = z.object({
    name: z.string(),
    animationSettings: AnimationSettings.optional()
});

export type Streamer = z.infer<typeof Streamer>;

// const alex = Streamer.parse({
//     name: "alexanarcho"
// });

// const alex = {
//     name: "alexanarcho"
// } as Streamer;
