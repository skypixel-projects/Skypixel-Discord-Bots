const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    message.channel.setRateLimitPerUser(args)
    message.channel.send(`Set the slowmode to : **${args}** seconds.`).then(m => m.delete ({
        timeout: 2000
    }))
}

module.exports.config = {
    name: "slowmode",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}