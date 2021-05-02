const Discord = require('discord.js');
const bot = new Discord.Client();

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    // message.channel.send(uptime)

    var embed = new Discord.MessageEmbed()
        .addFields({ name: lang_en.commands_uptime, value: '```' + uptime + '```', inline: true})
        .setColor(botsettings.embed_color_message_discord_bot)
        .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
    message.channel.send(embed);
}

module.exports.config = {
    name: "uptime",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ['online', 'on']
}