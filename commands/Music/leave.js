const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    if (message.member.voice.channel) {
        let queue = bot.distube.getQueue(message);
        if (queue) {
            bot.distube.stop(message);
            message.lineReply('Okay I will stop the music for you and I will leave from the channel!');
        }
    } else {
        message.reply(lang_en.commands_music_member_join_voice);
    }
}

module.exports.config = {
    name: "leave",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["leave"]
}