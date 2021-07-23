const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if(!message.member.voice.channel) return message.lineReply(lang_en.commands_skip_error_voice);
    bot.distube.skip(message);
    message.lineReply(lang_en.commands_skip_succes);
}

module.exports.config = {
    name: "skip",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["skip"]
}