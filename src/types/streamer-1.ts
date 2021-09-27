// --- Streamer
// id <-- = truncatedHashedSeed to identify the target of a donation unique
// name <-- persistent, max ~20 zeichen, keine emojis, all lower /a-z0-9/ unique
// alias <-- mit 😀 Emoji, max ~24 zeichen unique
// socket <-- dynamic on use, tells if online

// --- Animation
// id
// streamer
// size
// color

// --- Wallet
// streamer
// restoreHeight
// lastSyncHeight

// --- Stream
// streamer
// url
// platform <-- Enum
// language <-- Enum
// category <-- 1-zu-N (max 2-3)
// description <-- sanitized string field
// visibility <-- public; private

// --- Category
// Gaming
// Learning
// Pron
//

// --- Account
// streamer
// creationDate <-- timestamp
// status <-- closed; active

// --- Subscription/Invoice
// id
// streamer
// startDate <-- timestamp
// endDate <-- timestamp
// planType <-- basic; premium
// paidStatus <-- paid; unpaid; cancelled
// subaddress <-- of the platform operator

// --- Donation
// id
// streamer
// amount <-- double precision float?
// message <-- sanitized string
// displayTimeSeconds <-- int
// subaddress <-- string
// confirmations
// giphyUrl <-- ⚠️ proprietary; giphyId?
// donor <-- santized string, name of donor
// timestamp

// --- DonationSettings
// streamer
// secondPrice
// charPrice
// charLimit
// minAmount
// gifsMinAmount
// goal
// goalProgress
// goalReached
