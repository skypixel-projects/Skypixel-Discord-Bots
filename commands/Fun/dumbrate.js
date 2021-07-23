const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    let member = message.mentions.users.first() || message.author
    let rng = Math.floor(Math.random() * 101);
    let embed = new Discord.MessageEmbed()
        .setTitle(`${member.username} is ` + rng + `% dumb 🤣`)
        .setColor(botsettings.embed_color_message_discord_bot)
        .setFooter(`${lang_en.embed_asked} ` + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
    message.lineReply(embed);
}

module.exports.config = {
    name: "dumbrate",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["dumbrate"]
}