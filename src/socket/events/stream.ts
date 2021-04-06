import { Donation } from '../../models/donation';
import { Donor } from '../../models/donor';
import { Streamer } from '../../models/streamer';
import { StreamingStatus } from '../../models/streaming-status';

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
