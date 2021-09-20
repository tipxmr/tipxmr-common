import { Donor } from '../../schema/donor';
import { Streamer } from '../../schema/streamer';

export interface DonatorClientEvents {
  getStreamer: (username: string) => void;
  getSubaddress: (
    displayName: string,
    username: string,
    _id: string,
    donor: Donor,
    message: string
  ) => void;
  getOnlineStreamers: () => void;
}

export interface DonatorServerEvents {
  connection: () => void;
  disconnect: () => void;
  recieveStreamer: (streamer: Streamer) => void;
  subaddressToDonator: (data: any) => void;
  paymentConfirmation: (confirmation: any) => void;
  emitOnlineStreamers: (onlineStreamers: Streamer[]) => void;
}
