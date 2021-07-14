const Discord = require('discord.js');
const bot = new Discord.Client();

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    

    let member = message.mentions.users.first() || message.author

    let rng = Math.floor(Math.random() * 101);

    let embed = new Discord.MessageEmbed()
        .setTitle(`${member.username} is ` + rng + `% Gay 🤣`)
        .setColor(botsettings.embed_color_message_discord_bot)
        .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
    message.lineReply(embed);
}

module.exports.config = {
    name: "howgay",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}