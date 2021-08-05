const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    let feednumber = message.content.split(" ").slice(1)
    let feedstr = message.content.split(" ").slice(2).join(" ");
    let feednumber1 = parseInt(feednumber)
    if (!feedstr) return message.lineReply(lang_en.commands_feedback_rate_message_1)
    if (!feednumber1 || isNaN(parseInt(feednumber)) || parseInt(feednumber) <= 0 || parseInt(feednumber) > 5) return message.lineReply(`:x:`)
    if (feednumber1 > 5) return message.lineReply(lang_en.commands_feedback_rate_message_2)
    let stararray = []
    for (i = 0; i < feednumber1; i++) {
        stararray.push("⭐")
    }
    let embed = new Discord.MessageEmbed()
        .setTitle(lang_en.commands_feedback_new_review)
        .addField(lang_en.commands_feedback_stars, `${stararray.join("")}`)
        .setColor(botsettings.embed_color_message_discord_bot)
        .addField(lang_en.commands_feedback_comment, `${feedstr}`)
        .addField(lang_en.commands_feedback_from, `${message.author}`)
        .setThumbnail(message.author.displayAvatarURL({
            dynamic: true
        }))
        .setTimestamp()
        .setFooter(`${message.guild.name}`);

    await message.lineReply('Okay. I sended to the official Skypixel Discord Server!')
    channel = bot.channels.cache.get('860658021160058891');
    channel.send(embed);
}

module.exports.config = {
    name: "feedback",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["feedback", "fbdev"]
}