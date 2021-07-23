const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    message.channel.setRateLimitPerUser(args)
    message.lineReply(`${lang_en.commands_slowmode_set} **${args}** seconds!`)
}

module.exports.config = {
    name: "slowmode",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}