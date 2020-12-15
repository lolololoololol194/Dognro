import * as fs from 'fs';
import { requireFile, projectDir, writeJson } from 'discord-bot-quickstart';
import { IRhythmBotConfig, RhythmBot } from './bot';

const configPath = projectDir('../bot-config.json');
if (!fs.existsSync(configPath)) {
    writeJson({ discord: { token: '<BOT-TOKEN>' } }, configPath);
}

let config: IRhythmBotConfig = requireFile('../bot-config.json');

const bot = new RhythmBot(config);

if (!!config && config.discord.token === '<Nzg4MzE5NDAzNDUxMjE5OTY4.X9hxqA.A6R3ytLPwZF7oMxqSNrgNejgUhg>') {
    bot.logger.debug
    process.exit(0);
}

bot.connect()
    .then(() => {
        bot.logger.debug('Rhythm Bot Online');
        bot.listen();
    })
    .catch(err => bot.logger.error(err));
