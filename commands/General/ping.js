const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    const ping = new Discord.MessageEmbed()
        .setDescription(`🏓 \`${bot.ws.ping}${lang_en.commands_ping_message}`)
        .setColor(botsettings.embed_color_message_discord_bot)
    message.lineReply(ping);
}

module.exports.config = {
    name: "ping",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}