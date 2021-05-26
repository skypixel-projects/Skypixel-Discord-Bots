const ytdl = require('ytdl-core');
const Discord = require("discord.js");

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    if (!message.guild) return;

    const vcchannel = bot.channels.cache.get("834548647756562432");

    vcchannel.join().then(connection => {
        const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=yhRuWGQ8iM4', { filter: 'audioonly' }));

        dispatcher.setVolume(0.5);

        dispatcher.on('finish', () => { 
            console.log('Finished playing!');
            vcchannel.leave()
        });

        dispatcher.on('start', () => {
            console.log('Is playing!');
        });
    });
}

module.exports.config = {
    name: "fmradio.dev",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["fmradio.dev"]
}