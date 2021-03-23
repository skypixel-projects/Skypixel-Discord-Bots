const Discord = require('discord.js');
const fs = require("fs")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports.run = async (bot, message, args) => {
    message.delete();

    var embed = new Discord.MessageEmbed()
        .setAuthor(lang_en.maintenance)
        .setColor('RED')
            
    message.channel.send(embed);
}

module.exports.config = {
    name: "secsy",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}