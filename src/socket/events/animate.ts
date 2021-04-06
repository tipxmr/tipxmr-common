export interface AnimationClientEvents {
  getAnimationConfig: (username: string) => void;
}

export interface AnimationServerEvents {
  connection: () => void;
  disconnect: () => void;
  getAnimationConfig: (username: string) => void;
}
