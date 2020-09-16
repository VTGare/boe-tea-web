import { writable, readable } from "svelte/store";

export class BotStats {
  guilds: number;
  channels: number;
  postCount: number;

  constructor(guilds: number, channels: number, postCount: number) {
    this.guilds = guilds;
    this.channels = channels;
    this.postCount = postCount;
  }
}

export const stats = writable(new BotStats(0, 0, 0));
