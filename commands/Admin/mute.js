const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    const user = message.mentions.users.first();
    if(!user) return message.lineReply(lang_en.commands_mute_specify)

    message.channel.overwritePermissions([
        {
            id: user.id,
            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'],
        },
    ]);

    message.lineReply(lang_en.commands_mute_member_muted)
} 

module.exports.config = {
    name: "mute",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: []
}