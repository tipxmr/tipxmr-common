import { AnimationClientEvents, AnimationServerEvents } from './animate';
import { DonatorClientEvents, DonatorServerEvents } from './donate';
import { StreamerClientEvents, StreamerServerEvents } from './stream';

export type ClientEvents =
  | AnimationClientEvents
  | DonatorClientEvents
  | StreamerClientEvents;

export type ServerEvents =
  | AnimationServerEvents
  | DonatorServerEvents
  | StreamerServerEvents;
