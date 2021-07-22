const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    var embed = new Discord.MessageEmbed()
        .setTitle(lang_en.commands_help_title)
        .setDescription(lang_en.commands_help_description + `\n \n https://skypixel-projects.github.io/SK-DISCORDBOTS/`)
        .setColor(botsettings.embed_color_message_discord_bot)
        .setThumbnail(bot.user.displayAvatarURL())
        .setFooter(lang_en.commands_help_asked + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
    message.lineReply(embed);
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["help", "?"]
}