const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    if(!message.member.voice.channel) return message.lineReply("please join a voice channel first!");
    bot.distube.skip(message);
    message.lineReply('Okay I will skip the music for you!');
}

module.exports.config = {
    name: "skip",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["skip"]
}