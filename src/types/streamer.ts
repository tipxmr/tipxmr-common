import * as z from 'zod';
import AnimationSettings from './animation-settings';

// ---Partials
const Categories = z.enum(['']);

const Platform = z.enum(['Twitch', 'YouTube', 'DLive', 'SelfHosted'])
const Language = z.enum(['German', 'French', 'Esperanto', 'Spanish', 'Russian', 'Italian', 'Dutsch', 'Japanese', 'English', 'Portuguese'])

const Stream = z.object({
  url: z.string().url(),
  platform: Platform,
  language: Language,
  category: Categories,
  description: z.string().max(250, {message: "No more than 250 characters"}),
});

const DonationSettings = z.object({
  secondPrice: z.number().nonnegative(),
  charPrice: z.number().nonnegative(),
  charLimit: z.number().nonnegative(),
  minAmount: z.number().nonnegative(),
  gifsMinAmount: z.number().nonnegative(),
  goalProgress: z.number().nonnegative(),
  goal: z.number().nonnegative(),
  goalReached: z.boolean(),
});

const WalletSettings = z.object({
  restoreHeight: z.number().positive(),
});

const Account = z.object({
  creationDate: z.date(),
});

const History = z.object({
    donationHistory: z.object({}), // TODO To be determined..
  })

// --- Partial types
type Categories = z.infer<typeof Categories>;
type Platform = z.infer<typeof Platform>;
type Language = z.infer<typeof Language>;
type Stream = z.infer<typeof Stream>;
type WalletSettings = z.infer<typeof WalletSettings>;
type DonationSettings = z.infer<typeof DonationSettings>;
type Account = z.infer<typeof Account>;
type History = z.infer<typeof History>

// --- Streamer
export const Streamer = z.object({
  id: z.string(),
  seedHash: z.string(),
  userName: z.string(),
  streamerSocketId: z.string(),
  displayName: z
    .string()
    .nonempty({ message: "Can't be empty" })
    .max(15, { message: 'Maximum length is 15 characters' })
    .min(4, { message: 'Minimum length is 4 characters' })
    .regex(/[a-zA-Z0-9]/, { message: 'No special characters' }),
  isOnline: z.boolean(),
  animationSettings: AnimationSettings.optional(),
  donationSettings: DonationSettings.optional(),
  stream: Stream.optional(),
  wallet: WalletSettings.optional(),
  account: Account,
  history: History,
});

export type Streamer = z.infer<typeof Streamer>;

export default Streamer;

// const alex = Streamer.parse({
//     name: "alexanarcho"
// });

// const alex = {
//     name: "alexanarcho"
// } as Streamer;
