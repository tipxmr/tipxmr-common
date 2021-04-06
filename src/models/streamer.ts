export interface Streamer {
  displayName: string;
  userName: string;
  isOnline: boolean;
  _id: string;
  secondPrice: number;
  charPrice: number;
  charLimit: number;
  minAmount: number;
  gifsMinAmount: number;
  goalProgress: number;
  goal: number;
  goalReached: boolean;
  streamUrl: string;
  streamPlatform: string;
  streamLanguage: string;
  streamDescription: string;
  streamCategory: string;
}
