const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    let queue = bot.distube.getQueue(message);
    var embed = new Discord.MessageEmbed()
        .setTitle(lang_en.commands_queue_title)
        .setDescription(queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - ${song.formattedDuration}`).slice(0, 10))
        .setColor(botsettings.embed_color_message_discord_bot)
        .setFooter(`${lang_en.embed_asked} ` + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
    message.lineReply(embed)
}

module.exports.config = {
    name: "queue",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["queue"]
}