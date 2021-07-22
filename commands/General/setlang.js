const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {

    if (args === "-setlang") return message.lineReply("Please specify an language! (Romana, English, Magyar)")

    if (args === "Romana") {
        languages.set(message.guild.id, "lang_ro")
        message.lineReply("Limba botului a fost schimbată în Română!")
    }
    if (args === "English") {
        languages.set(message.guild.id, "lang_en")
        message.lineReply("The bot language has been changed to English!")
    }
    if (args === "Magyar") {
        languages.set(message.guild.id, "lang_hu")
        message.lineReply("A bot nyelvét megváltoztatták magyarra!")
    }
}

module.exports.config = {
    name: "setlang",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}