const Discord = require("discord.js");
const botsettings = require('../../botsettings.json');
const languages = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const lang_en = require(`../../languages/${languages.get(message.guild.id)}.json`);

    if (message.member.voice.channel) {
        let queue = bot.distube.getQueue(message);
        if (queue) {
            bot.distube.stop(message);
            message.lineReply(lang_en.commands_leave_message);
        }
    } else {
        message.reply(lang_en.commands_leave_member_join_voice);
    }
}

module.exports.config = {
    name: "leave",
    description: "",
    usage: "",
    accessableby: "Members",
    aliases: ["leave"]
}