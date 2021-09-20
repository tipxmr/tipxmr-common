import * as z from 'zod';

const AnimationSettings = z.object({
  id: z.string(),
});

const Stream = z.object({
  url: z.string(),
  platform: z.string(),
  language: z.string(),
  description: z.string(),
  category: z.string(),
})

type Stream = z.infer<typeof Stream>

const WalletSettings = z.object({
  restoreHeight: z.number(),
})

type WalletSettings = z.infer<typeof WalletSettings>

const DonationSettings = z.object({
  secondPrice: z.number(),
  charPrice: z.number(),
  charLimit: z.number(),
  minAmount: z.number(),
  gifsMinAmount: z.number(),
  goalProgress: z.number(),
  goal: z.number(),
  goalReached: z.boolean(),
})

type DonationSettings = z.infer<typeof DonationSettings>

export const Streamer = z.object({
  id: z.string(),
  seedHash: z.string(),
  userName: z.string(),
  streamerSocketId: z.string(),
  displayName: z.string(),
  isOnline: z.boolean(),
  animationSettings: AnimationSettings.optional(),
  donationSettings: DonationSettings.optional(),
  stream: Stream.optional(),
  wallet: WalletSettings.optional()
});

export type Streamer = z.infer<typeof Streamer>;

export default Streamer;

// const alex = Streamer.parse({
//     name: "alexanarcho"
// });

// const alex = {
//     name: "alexanarcho"
// } as Streamer;

  // settings: z.object({
  //   price_per_second_playtime: z.number(),
  //   price_per_character_in_message: z.number(),
  //   limit_of_characters_in_message: z.number(),
  //   minimum_tip_amount: z.number(),
  //   minimum_tip_amount_for_gifs: z.number(),
  //   minimum_amount_for_gifs: z.number(),
  // })
