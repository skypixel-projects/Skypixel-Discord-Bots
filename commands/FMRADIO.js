const ytdl = require('ytdl-core');
const Discord = require("discord.js");

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    if (!message.guild) return;
    const vcchannel = bot.channels.cache.get("834548647756562432");

    vcchannel.join().then(connection => {
        const dispatcher = connection.play(ytdl('https://youtu.be/smoyWZ4oXA8'));

        // Aici este volumul cu care botul sa puna muzica!
        dispatcher.setVolume(0.40);

        // Aici este bitrate-ul pentru calitatea muzici!
        dispatcher.setBitrate(12400);

        // Aici sunt decibeli pentru muzica!
        dispatcher.setVolumeDecibels(-1.20);

        dispatcher.on('finish', () => { 
            // console.log('Finished playing!');
            vcchannel.leave()
        });

        dispatcher.on('start', () => {
            // console.log('Is playing!');
            message.lineReplyNoMention('Okay music is playing now!');
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