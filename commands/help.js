const Discord = require("discord.js");

const botsettings = require('../botsettings.json');
const lang_en = require(`../languages/${botsettings.default_lang_for_discord_bot}.json`);


module.exports.run = async (bot, message, args) => {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    var embed = new Discord.MessageEmbed()
        .setTitle(`${lang_en.commands_help_title}`)
        .setDescription(`${lang_en.commands_help_description} \n \n https://yonaga678.github.io/SK-DISCORDBOTS/`)
        .setColor(botsettings.embed_color_message_discord_bot)
        .setThumbnail(bot.user.displayAvatarURL())
        .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
    message.lineReply(embed);
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["help", "?"]
}