const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if (args === "-setlang") return message.lineReply(lang_en.commands_setlang_error_message)
    if (args === "Romana") {
        languages.set(message.guild.id, "lang_ro")
        message.lineReply("Limba botului a fost setată in **Română**!")
    }
    if (args === "English") {
        languages.set(message.guild.id, "lang_en")
        message.lineReply("The language of the bot has been set to **English**!")
    }
    if (args === "Magyar") {
        languages.set(message.guild.id, "lang_hu")
        message.lineReply("A bot nyelvét **Magyarra** állítottuk be!")
    }
}

module.exports.config = {
    name: "setlang",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}