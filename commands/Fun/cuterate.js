const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);


module.exports.run = async (bot, message, args) => {
    message.delete();

    let member = message.mentions.users.first() || message.author

    let rng = Math.floor(Math.random() * 101);

    let embed = new Discord.MessageEmbed()
        .setTitle(`${member.username} is ` + rng + `% cute 🤣`)
        .setColor(botsettings.embed_color_message_discord_bot)
        .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
    message.channel.send(embed);
}

module.exports.config = {
    name: "cuterate",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["cuterate"]
}