const Discord = require('discord.js');
const fs = require("fs")

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    message.delete();

    var embed = new Discord.MessageEmbed()
        .setAuthor(lang_en.maintenance)
        .setColor(botsettings.embed_color_message_discord_bot)
        .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
            
    message.channel.send(embed);
}

module.exports.config = {
    name: "secsy",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}