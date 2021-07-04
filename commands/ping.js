const Discord = require("discord.js");

const botsettings = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {
    const ping = new Discord.MessageEmbed()
        .setDescription(`🏓 \`${bot.ws.ping}\`ms. This is the bot ping!`)
        .setColor(botsettings.embed_color_message_discord_bot)

    message.channel.send(ping);
}

module.exports.config = {
    name: "ping",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}