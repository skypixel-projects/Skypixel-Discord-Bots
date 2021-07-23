const Discord = require('discord.js');
const bot = new Discord.Client();
const botsettings = require('../../botsettings.json');
const fs = require('fs');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if(args === "-8ball") return message.lineReplyNoMention(lang_en.commands_8ball_question);
    let replies = ["It is certain", "Without a doubt", "You may rely on it", "Yes definitely", "It is decidedly so", "As I see it, yes", "Most likely", "Yes", "Outlook good", "Signs point to yes", "Reply hazy try again", "Better not tell you now", "Ask again later", "Cannot predict now", "Concentrate and ask again", "Don’t count on it", "Outlook not so good", "My sources say no", "Very doubtful", "My reply is no"]
    
    let result = Math.floor((Math.random() * replies.length));

    let embed = new Discord.MessageEmbed()
        .addField(lang_en.commands_8ball_embed_question, args)
        .addField(lang_en.commands_8ball_embed_answer, replies[result])
        .setColor(botsettings.embed_color_message_discord_bot)
        .setFooter(`${lang_en.embed_asked} ` + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
    message.lineReply(embed);
}

module.exports.config = {
    name: "8ball",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}