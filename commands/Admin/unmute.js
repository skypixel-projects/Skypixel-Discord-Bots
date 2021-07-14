const Discord = require("discord.js");

const botsettings = require('../../botsettings.json');
const lang_en = require(`../../languages/${botsettings.default_lang_for_discord_bot}.json`);


module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first().id;
    if(!user) return message.lineReply(`You need to specify a member!`)

    message.channel.permissionOverwrites.get(user).delete();
    message.lineReply(`Unmuted!`)
} 

module.exports.config = {
    name: "unmute",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}