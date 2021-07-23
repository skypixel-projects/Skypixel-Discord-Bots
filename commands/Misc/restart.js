const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if (message.author.id !== '236811109066211329') {
        return message.lineReply(lang_en.commands_restart_permission)
    }
    await message.lineReply(lang_en.commands_restart_succes)
    process.exit();
}

module.exports.config = {
    name: "restart",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}