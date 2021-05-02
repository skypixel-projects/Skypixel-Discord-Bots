const Discord = require('discord.js');
const bot = new Discord.Client();

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    message.lineReplyNoMention(lang_en.commands_announcement_reply);
    let channel = message.channel.guild.channels.cache.find((channel) => channel.name.toLowerCase() === `announcement`)
    
    channel.send(`@everyone ` + args)
}

module.exports.config = {
    name: "announce",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["ac", "announce", "announcement"]
}