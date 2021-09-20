import { Donation } from '../../schema/donation';
import { Donor } from '../../schema/donor';
import { Streamer } from '../../schema/streamer';
import { StreamingStatus } from '../../schema/streaming-status';

export interface StreamerClientEvents {
  login: (_id: string, username: string) => void;
  updateConfig: (streamerConfig: Streamer) => void;
  paymentRecieved: (donation: Donation) => void;
  subaddressToBackend: (donorInfo: Donor) => void;
  updateOnlineStatus: (_id: string, onlineStatus: StreamingStatus) => void;
  getAnimationConfig: (streamerName: string) => void;
}

export interface StreamerServerEvents {
  connection: () => void;
  disconnect: () => void;
  createSubaddress: (subaddress: string) => void;
}
