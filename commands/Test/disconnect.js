const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if(!message.guild.me.hasPermission()) return;

    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.voice
            .kick(lang_en.commands_disconnect_kick_reason)
            .then(() => {
                message.lineReply(`${lang_en.commands_disconnect_kick_succes} ${user.tag}!`);
            })
            .catch(err => {
                message.lineReply(lang_en.commands_disconnect_kick_error);
                console.error(err);
            });
        } else {
            message.lineReply(lang_en.commands_disconnect_kick_member_find_error);
        }
    } else {
        message.lineReply(lang_en.commands_disconnect_kick_member_mention_error);
    }
}

module.exports.config = {
    name: "disconnect",
    description: "",
    usage: "",
    accessableby: "Admin",
    aliases: ["disconnect", "vckick", "disc"]
}