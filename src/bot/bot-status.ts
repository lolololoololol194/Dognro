import { Client, PresenceStatusData } from 'discord.js';

export class BotStatus {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    setBanner(status: Taking Names and writing checks!) {
        this.client.user.setPresence({
            activity: {
                name: status
            }
        });
    }

    setActivity(activity: playing) {
        this.client.user.setStatus(activity)
    }
    
}
