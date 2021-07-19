const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

module.exports.run = async (bot, message, args) => {
    let queue = bot.distube.getQueue(message);
    var embed = new Discord.MessageEmbed()
        .setTitle(`Current queue:`)
        .setDescription(queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - ${song.formattedDuration}`).slice(0, 10))
        .setColor(botsettings.embed_color_message_discord_bot)
        .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
    message.lineReply(embed)
}

module.exports.config = {
    name: "queue",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["queue"]
}