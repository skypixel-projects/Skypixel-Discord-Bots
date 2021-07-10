const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);


module.exports.run = async (bot, message, args) => {
    message.channel.send("Beep").then((sentMessage) => sentMessage.edit("Boop!"))
}

module.exports.config = {
    name: "edit",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["edit"]
}