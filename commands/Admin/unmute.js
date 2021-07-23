const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    const user = message.mentions.users.first().id;
    if(!user) return message.lineReply(lang_en.commands_unmute_specify)

    message.channel.permissionOverwrites.get(user).delete();
    message.lineReply(lang_en.commands_unmute_member_unmuted)
} 

module.exports.config = {
    name: "unmute",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}