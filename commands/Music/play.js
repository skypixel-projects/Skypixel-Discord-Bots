const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if(!message.member.voice.channel) return message.lineReply(lang_en.commands_play_error_voice);
    let search = args
    if(!search) return message.lineReply(lang_en.commands_play_error_link);
    bot.distube.play(message, search)
}

module.exports.config = {
    name: "play",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["play"]
}