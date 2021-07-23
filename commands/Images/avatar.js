const Discord = require("discord.js")
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    const user = message.mentions.users.first() || message.author;
    	const avatarEmbed = new Discord.MessageEmbed()
            .setColor(botsettings.embed_color_message_discord_bot)
            .setAuthor(`${user.username} ` + lang_en.commands_avatar_title)
            .setImage(user.displayAvatarURL())
	        .setFooter(`${lang_en.embed_asked} ` + message.author.username, message.author.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
    message.lineReply(avatarEmbed);
    
}

module.exports.config = {
    name: "avatar",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ['pic', 'picture']
}