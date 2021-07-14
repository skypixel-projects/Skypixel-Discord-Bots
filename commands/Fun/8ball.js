const Discord = require('discord.js');
const bot = new Discord.Client();

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);

const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    if(args === "-8ball") return message.lineReplyNoMention('Please ask a full question!');
    // if(!args[0]) return message.lineReplyNoMention('Please ask a full question!');
    let replies = ["It is certain", "Without a doubt", "You may rely on it", "Yes definitely", "It is decidedly so", "As I see it, yes", "Most likely", "Yes", "Outlook good", "Signs point to yes", "Reply hazy try again", "Better not tell you now", "Ask again later", "Cannot predict now", "Concentrate and ask again", "Don’t count on it", "Outlook not so good", "My sources say no", "Very doubtful", "My reply is no"]
    
    let result = Math.floor((Math.random() * replies.length));

    let embed = new Discord.MessageEmbed()
        .addField("Question", args)
        .addField("Answer", replies[result])
        .setColor(botsettings.embed_color_message_discord_bot)
        .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
    message.lineReply(embed);
}

module.exports.config = {
    name: "8ball",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}