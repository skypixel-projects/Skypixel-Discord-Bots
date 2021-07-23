const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    // message.lineReply("Beep").then((sentMessage) => sentMessage.edit("Boop!"))
}

module.exports.config = {
    name: "edit",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["edit"]
}