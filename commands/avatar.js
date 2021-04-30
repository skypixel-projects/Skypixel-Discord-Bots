const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first() || message.author;
    	const avatarEmbed = new Discord.MessageEmbed()
            .setColor(botsettings.embed_color_message_discord_bot)
            .setAuthor(`${user.username} ` + lang_en.commands_avatar_title)
            .setImage(user.displayAvatarURL())
	        .setFooter('Asked by ' + message.author.username, message.author.displayAvatarURL())
    message.channel.send(avatarEmbed);
    message.delete();
}

module.exports.config = {
    name: "avatar",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ['pic', 'picture']
}