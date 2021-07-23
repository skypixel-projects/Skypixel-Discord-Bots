const Discord = require('discord.js');
const bot = new Discord.Client();
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    message.lineReply(lang_en.commands_announcement_reply);
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