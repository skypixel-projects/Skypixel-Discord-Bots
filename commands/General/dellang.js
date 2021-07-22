const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    languages.set(message.guild.id, "lang_en")
}

module.exports.config = {
    name: "dellang",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}