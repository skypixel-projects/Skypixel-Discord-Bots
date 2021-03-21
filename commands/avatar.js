const Discord = require("discord.js")

const botsettings = require('../botsettings.json');
const lang_en = require('../languages/lang_en.json');

module.exports.run = async (bot, message, args) => {
    message.delete();

    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if(member.user.bot) return;
    const img = await member.user.displayAvatarURL();
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setImage(img)
    .setTitle(`${member.user.username} ` + lang_en.commands_avatar_title)

    message.channel.send(embed);
}

module.exports.config = {
    name: "avatar",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: []
}