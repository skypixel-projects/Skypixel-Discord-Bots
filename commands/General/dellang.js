const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    languages.set(message.guild.id, "lang_en")
    message.lineReply(lang_en.commands_dellang_message);
}

module.exports.config = {
    name: "dellang",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}