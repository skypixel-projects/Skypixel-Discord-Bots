const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    if(!message.member.voice.channel) return message.lineReply("Please join a voice channel first!");
    let search = args
    if(!search) return message.lineReply('Please provide a search query');
    bot.distube.play(message, search)
}

module.exports.config = {
    name: "play",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["play"]
}